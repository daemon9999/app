import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import mapboxgl, { Map as M } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Feature, Polygon, GeoJsonProperties } from "geojson";
import { calculateCentroid } from "@/utils/calculateCentroid";

const locations = [
  [
    [48.3550941, 40.0107106], // First point
    [48.3561832, 40.0077281], // Second point
    [48.3598419, 40.0028379], // Third point
    [48.3683303, 40.0045], // Fourth point
    [48.376114, 40.005173], // Fifth point
    [48.3761425, 40.0093866], // Sixth point
    [48.3550941, 40.0107106], // Closing the polygon back to the first point`
  ],
  [
    [47.9957882, 39.9229758], // First point
    [48.0024255, 39.9276333], // Second point
    [48.0074805, 39.9236168], // Third point
    [48.0006648, 39.9187322], // Fourth point
    [47.9957882, 39.9229758], // Closing the polygon back to the first point
  ],
  [
    [47.118732268478254, 40.940501639347836], // First point
    [47.123155895652125, 40.946245102826076], // Second point
    [47.12482382065212, 40.945389384782594], // Third point
    [47.125955108912976, 40.94367794869565], // Fourth point
    [47.127681048695585, 40.942314601304346], // Fifth point
    [47.13333749, 40.93818104804348], // Sixth point
    [47.12818867804343, 40.93100171869565], // Seventh point
    [47.1183841797826, 40.93764441130435], // Eighth point
    [47.118732268478254, 40.940501639347836], // Closing the polygon back to the first point
  ],
  [
    [47.08228247173913, 40.04025762413043],
    [47.086766516956516, 40.04095483847826],
    [47.089063223043475, 40.03935534673913],
    [47.09021157608695, 40.03656648934783],
    [47.08955537434782, 40.03604699630435],
    [47.08656145391304, 40.03569155369565],
    [47.08425107695652, 40.03525408586957],
    [47.08228247173913, 40.04025762413043],
  ],
];
interface MapProps {
  selectedLoc: number;
}
export default function Map({ selectedLoc }: MapProps) {
  const mapContainerRef = useRef<null | HTMLDivElement>(null);
  const mapRef = useRef<M | null>(null); // Reference to store the map instance

  const apiKey = "5LMhdccvYyOC6duV7ZNR";
  const mapStyleUrl =
    "https://api.maptiler.com/maps/00f52ade-3eb9-4aa1-bcfa-dc9d7a7136f4/style.json?key=";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef?.current || "",
      style: mapStyleUrl + apiKey,
      center: [48.30799598261211, 40.03018436474803], // Longitude, Latitude
      zoom: 14,
      accessToken:
        "pk.eyJ1IjoiZGFlbW9uOTk5OSIsImEiOiJjbTBvYmUzZTIwN2V0MnFyM25rb3d3eHBpIn0.R2AS9Nw453PbfpXyNYdKKw",
    });
    mapRef.current = map;

    map.on("load", () => {
      const polygons: Feature<Polygon, GeoJsonProperties>[] = [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [locations[0]],
          },
          properties: {},
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [locations[1]],
          },
          properties: {},
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [locations[2]],
          },
          properties: {},
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [locations[3]],
          },
          properties: {},
        },
      ];

      // Add a source of type 'geojson' which contains the coordinates
      map.addSource("polygons", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: polygons,
        },
      });

      // Add a new layer to visualize the polygon
      map.addLayer({
        id: "polygons-fill",
        type: "fill",
        source: "polygons",
        layout: {},
        paint: {
          "fill-color": "#D4D21B", // Fill color of the polygon

          "fill-opacity": 0.3, // Transparency of the polygon
        },
      });
      map.addLayer({
        id: "polygons-outline",
        type: "line",
        source: "polygons",
        layout: {},
        paint: {
          "line-color": "#3D5227", // Color of the outline
          "line-width": 5, // Width of the outline
        },
      });
    });
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const [lat, long] = calculateCentroid(locations[selectedLoc]);
      mapRef.current.flyTo({
        center: [lat, long], // Set the new center
        zoom: 14, // Set the new zoom level
        speed: 1.2, // Speed of the transition
        curve: 1.42, // How much the map "curves" as it moves (1 means linear)
        easing: (t) => t, // Easing function to control the animation
      });
    }
  }, [selectedLoc]);
  return (
    <>
      <div
        className="w-full map-container flex-shrink-0 h-[375px] xs:h-[450px] md:h-[550px]"
        ref={mapContainerRef}
      />
    </>
  );
}
