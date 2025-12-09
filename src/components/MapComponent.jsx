// components/MapComponent.jsx
"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom Zoom Buttons
function ZoomControls() {
  const map = useMap();

  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2 z-[1000]">
      <button
        onClick={() => map.zoomIn()}
        className="bg-white shadow-md px-3 py-2 rounded-lg hover:bg-gray-100"
      >
        ➕
      </button>
      <button
        onClick={() => map.zoomOut()}
        className="bg-white shadow-md px-3 py-2 rounded-lg hover:bg-gray-100"
      >
        ➖
      </button>
    </div>
  );
}

export default function MapComponent() {
  // Coordinates of your address
  const position = [23.0846, 72.5286];
  const [zoom] = useState(15);

  return (
    <div className="relative w-full  rounded-2xl overflow-hidden shadow-xl ">
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position}>
          <Popup>
            📍 <strong>E 914, Ganesh Glory 11</strong> <br />
            Jagatpur Road, SG Highway <br />
            Ahmedabad, Gujarat - 382470
          </Popup>
        </Marker>
        <ZoomControls />
      </MapContainer>
    </div>
  );
}
