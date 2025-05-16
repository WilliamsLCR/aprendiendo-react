import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, DrawingManager } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 20.6736,
  lng: -103.344
};

const GoogleMapasDT = () => {
  const [drawingOptions, setDrawingOptions] = useState(null);
  const mapRef = useRef(null);

  const handleMapLoad = (map) => {
    mapRef.current = map;

    setDrawingOptions({
      drawingControl: true,
      drawingControlOptions: {
        position: window.google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon', 'rectangle', 'polyline']
      }
    });
  };

  const handlePolygonComplete = (polygon) => {
    const path = polygon.getPath().getArray().map(coord => ({
      lat: coord.lat(),
      lng: coord.lng()
    }));
    console.log('Polígono:', path);
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={['drawing']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={handleMapLoad}
      >
        {drawingOptions && (
          <DrawingManager
            options={drawingOptions}
            onPolygonComplete={handlePolygonComplete}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapasDT;
