import React from "react";
import useGeolocationAccess from "../../hooks/useGeoLocation";
import Button from "../../components/button";

function App() {
  const { location, error, requestingGeolocation, requestGeolocationAccess } =
    useGeolocationAccess();

  return (
    <div className="container">
      <h1>Geolocation Example</h1>
      {location ? (
        <div className="container">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="container">
          <p>Click the button to allow access to geolocation:</p>
          <Button
            onClick={requestGeolocationAccess}
            disabled={requestingGeolocation}
          >
            {requestingGeolocation
              ? "Requesting Geolocation..."
              : "Request Geolocation Access"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
