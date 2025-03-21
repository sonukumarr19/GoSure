
// import React, { useState, useEffect, useCallback } from 'react';
// import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Custom marker icons
// const createCustomIcon = (iconUrl) => L.icon({
//   iconUrl,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

// // Create markers once, not on every render
// const defaultIcon = createCustomIcon('https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png');

// // Default center for India (adjust as needed)
// const DEFAULT_CENTER = { lat: 20.5937, lng: 78.9629 };
// const DEFAULT_ZOOM = 13;

// // Recenter map component with memo to prevent unnecessary rerenders
// const RecenterMap = React.memo(({ position }) => {
//   const map = useMap();
  
//   useEffect(() => {
//     if (position && position.lat && position.lng) {
//       map.setView([position.lat, position.lng], map.getZoom());
//     }
//   }, [position, map]);
  
//   return null;
// });

// const LiveTracking = ({ userLocation, captainLocation }) => {
//   const [currentPosition, setCurrentPosition] = useState(DEFAULT_CENTER);
  
//   // Geolocation setup with error handling
//   const setupGeolocation = useCallback(() => {
//     if (!navigator.geolocation) {
//       console.error("Geolocation is not supported");
//       return;
//     }

//     const successCallback = (position) => {
//       const { latitude: lat, longitude: lng } = position.coords;
//       setCurrentPosition({ lat, lng });
//     };

//     const errorCallback = (error) => {
//       console.error("Geolocation error:", error.message);
//       // Fallback to default location
//       setCurrentPosition(DEFAULT_CENTER);
//     };

//     const options = {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0
//     };

//     // Get initial position
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

//     // Watch for position updates
//     const watchId = navigator.geolocation.watchPosition(
//       successCallback,
//       errorCallback,
//       options
//     );

//     return () => navigator.geolocation.clearWatch(watchId);
//   }, []);

//   useEffect(() => {
//     const cleanup = setupGeolocation();
//     return () => cleanup && cleanup();
//   }, [setupGeolocation]);

//   return (
//     <MapContainer 
//       center={currentPosition} 
//       zoom={DEFAULT_ZOOM} 
//       style={{ width: '100%', height: '100%' }}
//       zoomControl={false}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />

//       <RecenterMap position={currentPosition} />

//       {/* Current user location */}
//       <Marker position={currentPosition} icon={defaultIcon}>
//       </Marker>

//       {/* Captain location if available */}
//       {captainLocation && (
//         <Marker 
//           position={captainLocation} 
//           icon={defaultIcon}
//         />
//       )}
//     </MapContainer>
//   );
// };

// export default React.memo(LiveTracking);







import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icons
const createCustomIcon = (iconUrl) => L.icon({
  iconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const defaultIcon = createCustomIcon('https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png');

const DEFAULT_CENTER = { lat: 20.5937, lng: 78.9629 };
const DEFAULT_ZOOM = 13;

const RecenterMap = React.memo(({ position }) => {
  const map = useMap();
  
  useEffect(() => {
    if (position && position.lat && position.lng) {
      map.setView([position.lat, position.lng], map.getZoom());
    }
  }, [position, map]);
  
  return null;
});

const LiveTracking = ({ userLocation, captainLocation }) => {
  const [currentPosition, setCurrentPosition] = useState(DEFAULT_CENTER);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const updatePosition = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      setIsLoading(false);
      return;
    }

    const successCallback = (position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      setCurrentPosition({ lat, lng });
      setIsLoading(false);
      setError(null);
      console.log("Position updated:", { lat, lng });
    };

    const errorCallback = (error) => {
      console.error("Geolocation error:", error.message);
      setError(error.message);
      setIsLoading(false);
      setCurrentPosition(DEFAULT_CENTER);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      enableHighAccuracy: true,
      timeout: 10000,
      // maximumAge: 0
    });
  }, []);

  useEffect(() => {
    // Initial position update
    updatePosition();

    // Set up 10-second interval
    const intervalId = setInterval(updatePosition, 10000);

    // Cleanup
    return () => clearInterval(intervalId);
  }, [updatePosition]);

  if (error) {
    return <div className="text-red-500 p-4">Error loading map: {error}</div>;
  }

  if (isLoading) {
    return <div className="p-4">Loading map...</div>;
  }

  return (
    <MapContainer 
      center={currentPosition} 
      zoom={DEFAULT_ZOOM} 
      style={{ width: '100%', height: '100%' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <RecenterMap position={currentPosition} />

      {/* Current user location */}
      <Marker position={currentPosition} icon={defaultIcon} />

      {/* Captain location if available */}
      {captainLocation && (
        <Marker 
          position={captainLocation} 
          icon={defaultIcon}
        />
      )}
    </MapContainer>
  );
};

export default React.memo(LiveTracking);