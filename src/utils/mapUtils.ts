/**
 * Google Maps API utilities
 */

// Google Maps API Key - In production, this should be moved to environment variables
// For development purposes, we're using a constant here
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBUmdiReQTjGTgiAImNBUIlUyqJhj_e-w8';

// Function to get the Google Maps URL for directions
export const getDirectionsUrl = (latitude: number, longitude: number): string => {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
};

// Function to get the Google Maps Static Image URL
export const getStaticMapImageUrl = (
  latitude: number, 
  longitude: number, 
  zoom = 15, 
  width = 600, 
  height = 300
): string => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${width}x${height}&markers=color:red%7C${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;
};

// Function to load Google Maps script
export const loadGoogleMapsScript = (callback: () => void): void => {
  // Check if script is already loaded
  if (window.google && window.google.maps) {
    callback();
    return;
  }

  // Create script element
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
  script.async = true;
  script.defer = true;
  
  // Attach callback
  window.initMap = callback;
  
  // Append to document
  document.head.appendChild(script);
}; 