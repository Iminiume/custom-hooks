import { useState } from "react";

function useGeolocationAccess() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [requestingGeolocation, setRequestingGeolocation] = useState(false);

  const requestGeolocationAccess = () => {
    setRequestingGeolocation(true);

    // Request geolocation access
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Successfully retrieved location
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setRequestingGeolocation(false);
      },
      (err) => {
        // Handle geolocation error
        setRequestingGeolocation(false);

        if (err.code === 1) {
          // User denied access to geolocation
          setError("User denied access to geolocation.");
        } else {
          setError(err.message);
        }
      }
    );
  };

  return { location, error, requestingGeolocation, requestGeolocationAccess };
}

export default useGeolocationAccess;
