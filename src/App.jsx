import React from "react";
import WebSocket from "./examples/webSocket";
import FormValidation from "./examples/formValidation";
import Authentication from "./examples/authentication";
import GeoLocation from "./examples/geoLocation";
import LocalStorage from "./examples/localStorage";
import SessionStorage from "./examples/sessionStorage";
import DarkMode from "./examples/darkMode";
import useDarkMode from "./hooks/useDarkMode";
import MediaQuery from "./examples/mediaQuery/mediaQuery";
import CopyToClipboard from "./examples/copyToClipboard/copyToClipboard";
import ScrollPosition from "./examples/scrollPosition/scrollPosition";

function App() {
  return (
    <>
      <MediaQuery />
      <DarkMode />
      <Authentication />
      <WebSocket />
      <FormValidation />
      <ScrollPosition />
      <GeoLocation />
      <LocalStorage />
      <SessionStorage />
      <CopyToClipboard />
    </>
  );
}

export default App;
