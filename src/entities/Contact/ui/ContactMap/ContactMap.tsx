"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface IProps {
  longitude: number;
  latitude: number;
}

function ContactMap({ longitude, latitude }: IProps) {
  const customIcon = new L.Icon({
    iconUrl: "/map/map.png",
    iconSize: [54, 64],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        style={{ height: "400px", width: "100%", borderRadius: 6 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>Toqtarbay Tours</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ContactMap;
