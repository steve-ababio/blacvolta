'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Center coordinates for Accra, Ghana
    const position: [number, number] = [5.6037, -0.1870];

    // Initialize map
    const map = L.map(mapRef.current, {
      center: position,
      zoom: 13,
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    mapInstanceRef.current = map;

    // Add CartoDB Dark Matter tile layer (gorgeous dark theme matching BlacVolta)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
    }).addTo(map);

    // Create custom pulsating icon using DivIcon
    const customIcon = L.divIcon({
      className: 'custom-pulsating-marker',
      html: `
        <div class="relative flex items-center justify-center w-12 h-12" style="transform: translate(-12px, -12px);">
          <div class="absolute w-12 h-12 rounded-full bg-[#D49A35] opacity-25 animate-ping" style="animation-duration: 3s;"></div>
          <div class="absolute w-7 h-7 rounded-full bg-[#D49A35] opacity-45 animate-ping" style="animation-duration: 1.5s;"></div>
          <div class="relative w-4 h-4 rounded-full bg-[#D49A35] border-2 border-white shadow-[0_0_12px_rgba(212,154,53,1)]"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // Add marker to map
    L.marker(position, { icon: customIcon }).addTo(map);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full rounded-2xl min-h-[300px]" />;
}
