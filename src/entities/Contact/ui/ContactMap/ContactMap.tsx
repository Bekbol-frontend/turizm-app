"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./ContactMap.module.scss";
import { IRouteProduct } from "@/entities/Product";
import { useMemo } from "react";
import { div } from "framer-motion/client";
import { useTranslations } from "next-intl";

interface IProps {
  longitude: number;
  latitude: number;
  detailRoute?: boolean;
  route?: IRouteProduct[];
}

function ContactMap({ longitude, latitude, detailRoute, route }: IProps) {
  const t = useTranslations("MapContact");

  const customIcon = new L.Icon({
    iconUrl: "/map/map.png",
    iconRetinaUrl: "/map/map.png",
    iconSize: [54, 64],
    iconAnchor: [27, 64],
    popupAnchor: [0, -60],
  });

  const paths = useMemo(() => {
    return route
      ?.sort((a, b) => a.sort_order - b.sort_order)
      .map((item) => [item.latitude, item.longitude] as LatLngExpression);
  }, [route]);

  if (detailRoute && route && paths && paths.length > 0) {
    return (
      <div className={styles.block}>
        <MapContainer
          center={paths[0]}
          zoom={8}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution="&copy; OpenStreetMap &copy; CARTO"
          />

          {route.map((loc, index) => (
            <Marker
              key={index}
              position={[loc.latitude, loc.longitude] as LatLngExpression}
              icon={customIcon}
            >
              <Popup>{loc.sort_order + 1}. {t("Point")}</Popup>
            </Marker>
          ))}

          <Polyline positions={paths} />
        </MapContainer>
      </div>
    );
  }

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
