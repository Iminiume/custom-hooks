import React from "react";
import WebSocket from "./examples/webSocket";
import FormValidation from "./examples/formValidation";
import Authentication from "./examples/authentication";
import GeoLocation from "./examples/geoLocation";
import LocalStorage from "./examples/localStorage";
import SessionStorage from "./examples/sessionStorage";
import DarkMode from "./examples/darkMode";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  console.log(isDarkMode);

  return (
    <>
      {/* Your components */}
      <DarkMode />
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
