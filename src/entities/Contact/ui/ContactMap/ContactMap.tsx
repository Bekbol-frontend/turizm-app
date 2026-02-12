"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./ContactMap.module.scss";

interface IProps {
  longitude: number;
  latitude: number;
}

function ContactMap({ longitude, latitude }: IProps) {
  const customIcon = new L.Icon({
    iconUrl: "/map/map.png",
    iconRetinaUrl: "/map/map.png",
    iconSize: [54, 64],
    iconAnchor: [27, 64],
    popupAnchor: [0, -60],
  });

  return (
    <div className={styles.block}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        style={{ height: "400px", width: "100%", borderRadius: 6 }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap &copy; CARTO"
        />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>Toqtarbay Tours</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ContactMap;
