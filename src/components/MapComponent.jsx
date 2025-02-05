import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIcon from "./location.png"; 

const MapComponent = () => {
  const position = [12.9716, 77.5946]; 

  const customIcon = L.icon({
    iconUrl: locationIcon, 
    iconSize: [40, 40], 
    iconAnchor: [20, 40], 
    popupAnchor: [0, -40], 
  });

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <strong>Bangalore, India</strong> <br />
            This is the location you are viewing.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
