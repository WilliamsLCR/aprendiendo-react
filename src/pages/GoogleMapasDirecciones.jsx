import React, { useState } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '800px'
};

const origen = { lat: 19.4326, lng: -99.1332 };
const destino = { lat: 19.7036, lng: -99.1013 };

const GoogleMapasDirecciones = () => {
    const { isLoaded } =  useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    });

    const [directions, setDirections] = useState(null);

    const directionsCallback = (response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setDirections(response);
            } else {
                console.log('Error al obtener las direcciones:', response);
            }
        }
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={origen}
            zoom={10}
        >

        <DirectionsService
            options={{
                destination: destino,
                origin: origen,
                travelMode: 'DRIVING'
            }}
            callback={directionsCallback}
        />

        { directions && (
            <DirectionsRenderer
                options={{
                    directions: directions
                }}
            />
        )}

        <Marker position={origen} label="A" />
        <Marker position={destino} label="B" />

        </GoogleMap>

        ) : (
            <div>Cargado mapa...</div>
        );
};

export default GoogleMapasDirecciones;