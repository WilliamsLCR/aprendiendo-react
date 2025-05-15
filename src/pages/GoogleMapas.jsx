import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 23.2313686,
  lng: -106.4265038

};

export default function Mapa() {
  return (
    <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
