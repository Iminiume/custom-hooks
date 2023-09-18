import React, { useEffect, useCallback, useState } from "react";
import WebSocket from "./examples/webSocket";
import FormValidation from "./examples/formValidation";
import Authentication from "./examples/authentication";
import GeoLocation from "./examples/geoLocation";

function App() {
  return (
    <>
      <Authentication />
      <WebSocket />
      <FormValidation />
      <GeoLocation />
    </>
  );
}

export default App;
