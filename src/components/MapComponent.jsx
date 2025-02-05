// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const MapComponent = () => {
//   const position = [12.9716, 77.5946]; 

//   return (
//     <div className="map-container">
//       <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="leaflet-map">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={position}>
//           <Popup> This is Bangalore, India. </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;



import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIcon from "./location.png"; // Replace with your image path

const MapComponent = () => {
  const position = [12.9716, 77.5946]; // Bangalore coordinates

  // Custom Marker Icon
  const customIcon = L.icon({
    iconUrl: locationIcon, // Path to your image
    iconSize: [40, 40], // Size of the icon [width, height]
    iconAnchor: [20, 40], // Position where the icon is anchored
    popupAnchor: [0, -40], // Position of the popup relative to the icon
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
