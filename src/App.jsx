import React from "react";
import WebSocket from "./examples/webSocket";
import FormValidation from "./examples/formValidation";
import Authentication from "./examples/authentication";
import GeoLocation from "./examples/geoLocation";
import LocalStorage from "./examples/localStorage";
import SessionStorage from "./examples/sessionStorage";
import DarkMode from "./examples/darkMode";
import MediaQuery from "./examples/mediaQuery/mediaQuery";
import CopyToClipboard from "./examples/copyToClipboard";
import ScrollPosition from "./examples/scrollPosition";
import Notification from "./examples/notification";

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
      <Notification />
    </>
  );
}

export default App;
