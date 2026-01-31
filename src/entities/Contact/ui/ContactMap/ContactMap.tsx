"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const center: LatLngExpression = [41.2995, 69.2401];

function ContactMap() {
  return (
    <div>
      <MapContainer
        center={center}
        zoom={15}
        style={{ height: "400px", width: "100%", borderRadius: 6 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[41.2995, 69.2401]}>
          <Popup>Toshkent</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ContactMap;
