import numpy as np
from .models_utils.soil_moisture_predictor import SoilMoisturePredictor
from .models_utils.dubois import dubois
from django.db import models
import torch
import rasterio
import json
from shapely import Point, Polygon
import geopandas as gpd
from .utils.process_soil_moisture import (
    ANGLE,
    get_field_spec,
    load_geojson,
    format_spec,
    get_water_required,
    update_map,
    get_field_sar,
    get_hectares
)
from .utils.predict import predict_soil_moisture
from .utils.process_weather import get_weather_forecast
from .colors.image_conversion import convert2image
from .preprocessing import free_outliers
from .colors.color_mapping import transform2rgb
from .colors.image_conversion import convert2image
import os
current_dir = os.path.dirname(__file__)  # Directory of the current script
MODEL_PATH = os.path.join(current_dir, 'saved_models', 'model_cpu.pt')
PATH_IMAGE_DESCRIPTION = os.path.join(current_dir, 'data/sentinel_data/fields') 
def load_model(model_path: str  = MODEL_PATH):
    """Load Soil Moisture Predictor"""
    
    checkpoints = torch.load(model_path)
    model = SoilMoisturePredictor()
    model.load_state_dict(checkpoints)

    return model
# Create your models here.
class Processor(models.Model):
    field_id = models.IntegerField(default=1)
    device = models.CharField(max_length=10, default='cpu')
    path_image_description = PATH_IMAGE_DESCRIPTION
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.model = load_model().to(self.device)
    
    def update_field_id(self, field_id: int):
        self.field_id = field_id
        self.save()



    def get_spec(self) -> np.ndarray:
        """The function to generate spectrum with soil moisture map and save"""
        imgPath =  os.path.join(current_dir, 'images', 'field_{}.png'.format(self.field_id))
        return  open(imgPath, 'rb')    


    def __predict(self) -> np.ndarray:
        _, temperature, precipitation = self.get_weather_forecast()
        soil_moisture_change = predict_soil_moisture(model=self.model, temperature=temperature, precipitation=precipitation)
        return soil_moisture_change
        
    def see_future(self):
        sm, src = self.get_sm()
        sm_change = self.__predict()

        indexes = self.__get_indexes(sample=sm, src=src)
        
        water_required_total, water_required_per = get_water_required(soil_moisture_map=sm, indexes=indexes)

        water_totals = [water_required_total]
        water_pers = [water_required_per]
        for i in range(sm_change.size):
            sm = update_map(soil_moisture_map=sm, soil_moisture_change=sm_change[i])

            water_required_total, water_required_per = get_water_required(soil_moisture_map=sm, indexes=indexes)
            water_totals.append(water_required_total)
            water_pers.append(water_required_per)
        
        return water_totals, water_pers
    
    def get_weather_forecast(self, days: int = 5):
        return get_weather_forecast(field_id=self.field_id, days=days)

    def get_sm(self) -> np.ndarray:
        (vv, vh), src = get_field_sar(field_id=self.field_id)
        sm = dubois(vv=vv, vh=vh, angle=ANGLE)
        sm = free_outliers(sm[None], whis=1.5)[0]
        return sm, src
    
    def get_insights(self):
        filepath = os.path.join(self.path_image_description, str(self.field_id), 'image_description', 'image_description.json')
        _, sm, src = self.get_sm_map()
        poly = load_geojson(field_id=self.field_id)
        data = json.load(open(filepath))
        
        indexes = self.__get_indexes(sample=sm, src=src)
        _, water_per = get_water_required(soil_moisture_map=sm, indexes=indexes)

        field_size = get_hectares(soil_moisture_map=sm, poly=poly, src=src)
        status = self.get_status_report(sm=sm)

        spec, src = get_field_spec(field_id=self.field_id)
        sm_map, _, _= self.get_sm_map()

        spec_formatted = format_spec(spec=spec, sm_map=sm_map, poly=poly, src=src)
        imgPath =  os.path.join(current_dir, 'images', 'field_{}.png'.format(self.field_id))
        spec_image = convert2image(spec_formatted.transpose([1, 2, 0]))
        spec_image.save(imgPath)


        data['Hectare'].append('{} hectares'.format(field_size))
        data['Status'].append(status)

        if status == 'Bad':
            data['Problems'].append('Lack of water distribution')
            data['Recommendations'].append('{} kg/m^2 water is required'.format(round(water_per, 3)))
        else:
            data['Problems'].append('Water distribution is normal')
            data['Recommendations'].append('No irrigation is needed')
        return data
    
    
    def get_status_report(self, sm: np.ndarray) -> str:
        status = sm.mean()
      
        if status > 0.6:
            return 'Bad'

        elif status > 0.4:
            return 'Good'
        
        elif status > .3:
            return 'Normal'

        else:
            return 'Bad'
    def get_sm_map(self) -> np.ndarray:
        sm, src = self.get_sm()
        sm_map = transform2rgb(sm)
        return sm_map, sm, src
    
    def __get_indexes(self, sample: np.ndarray, src: rasterio.io.DatasetReader):
        height, width = sample.shape
        poly = load_geojson(field_id=self.field_id)

        cols, rows = np.meshgrid(np.arange(width), np.arange(height))
        xs, ys = rasterio.transform.xy(src.transform, rows, cols)
    
        lons = np.array(xs)
        lats = np.array(ys)

        lons = lons.reshape(-1)
        lats = lats.reshape(-1)

        indexes = []
        points = gpd.points_from_xy(lons, lats)
        indexes = np.where(points.within(poly))[0]
        return indexes