import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [12.9716, 77.5946]; 

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup> This is Bangalore, India. </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
