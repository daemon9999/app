from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import ProcessorSerializer
from .models import Processor
from django.http import FileResponse
# Create your views here.

processor = Processor()

@api_view(['GET'])
def get_spec(request, pk):
    processor.update_field_id(pk)
    # Call the get_spec method
    file = processor.get_spec()
    response = FileResponse(file)
    # Optional: Set the content type and headers if needed
    response['Content-Type'] = 'image/png'
    return response

@api_view(['GET'])
def get_forecast(request, pk):
    processor.update_field_id(pk)
    forecast = processor.get_weather_forecast()
    return Response({'data': forecast}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_future(request, pk):
    processor.update_field_id(pk)
    future = processor.see_future()
    return Response({'data': future}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_insights(request, pk):
    processor.update_field_id(pk)
    insights = processor.get_insights()
    return Response({'data': insights}, status=status.HTTP_200_OK)
