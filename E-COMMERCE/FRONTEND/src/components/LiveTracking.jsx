import React, { useState, useEffect, useRef } from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: -3.745, lng: -38.523 });
  const mapContainerRef = useRef(null);

  // Get user's location and update in real-time
  useEffect(() => {
    if (navigator.geolocation) {
      const updatePosition = (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      };

      navigator.geolocation.getCurrentPosition(updatePosition);
      const watchId = navigator.geolocation.watchPosition(updatePosition);

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // Load GoMaps API and display map
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.gomaps.pro/api.js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.onload = () => {
      if (window.GoMap) {
        const map = new window.GoMap(mapContainerRef.current, {
          center: currentPosition,
          zoom: 15,
        });

        map.addMarker({
          position: currentPosition,
          title: 'Your Location',
        });
      } else {
        console.error('GoMap API failed to load.');
      }
    };

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [currentPosition]);

  return (
    <div>
      <h2>Live Tracking</h2>
      <div ref={mapContainerRef} style={containerStyle}></div>
    </div>
  );
};

export default LiveTracking;
