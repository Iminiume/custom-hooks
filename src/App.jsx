import React from "react";
import WebSocket from "./examples/webSocket";
import FormValidation from "./examples/formValidation";
import Authentication from "./examples/authentication";
import GeoLocation from "./examples/geoLocation";
import LocalStorage from "./examples/localStorage";
import SessionStorage from "./examples/sessionStorage";

function App() {
  return (
    <>
      <Authentication />
      <WebSocket />
      <FormValidation />
      <GeoLocation />
      <LocalStorage />
      <SessionStorage />
    </>
  );
}

export default App;
