"use client";

import { useEffect, useRef, useState } from 'react';
import { loadGoogleMapsScript, getDirectionsUrl } from '@/utils/mapUtils';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  name?: string;
}

// Define the Google Maps types for TypeScript
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const MapComponent = ({ 
  latitude = 23.254638926638993, 
  longitude = 72.6568969776599, 
  zoom = 16,
  name = "GoldWorld"
}: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Define map initialization function
    const initializeMap = () => {
      if (!mapRef.current) return;
      
      try {
        setIsLoading(false);
        
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: zoom,
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: true,
          zoomControl: true,
        });

        const marker = new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: name,
          animation: window.google.maps.Animation.DROP,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px;">
              <h3 style="margin-bottom: 5px; color: #B45309; font-weight: bold;">${name}</h3>
              <p style="margin: 0;">Click to get directions</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
          window.open(getDirectionsUrl(latitude, longitude), '_blank');
        });
      } catch (err) {
        console.error("Error initializing map:", err);
        setError("Error initializing the map. Please refresh the page.");
      }
    };
    
    // Set up the global initMap function
    window.initMap = initializeMap;
    
    // Load Google Maps script
    try {
      loadGoogleMapsScript(initializeMap);
    } catch (err) {
      console.error("Error loading Google Maps:", err);
      setError("Failed to load Google Maps. Please try again later.");
      setIsLoading(false);
    }
    
    // Set a timeout to detect if the map fails to load
    const timeout = setTimeout(() => {
      if (isLoading) {
        setError("Map is taking too long to load. Please refresh the page.");
        setIsLoading(false);
      }
    }, 10000);
    
    return () => {
      // Clean up
      clearTimeout(timeout);
      window.initMap = () => {};
    };
  }, [latitude, longitude, zoom, name, isLoading]);

  // Function to handle manual directions
  const handleGetDirections = () => {
    window.open(getDirectionsUrl(latitude, longitude), '_blank');
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md" style={{ minHeight: '300px' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-amber-800">Loading map...</div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-4">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={handleGetDirections}
            className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900"
          >
            Get Directions
          </button>
        </div>
      )}
      
      <div 
        ref={mapRef} 
        className="w-full h-full" 
        style={{ minHeight: '300px' }}
      />
    </div>
  );
};

export default MapComponent; 