import React from "react";
import FormValidation from "./examples/formValidation";
import Authentication from "./examples/authentication";
import GeoLocation from "./examples/geoLocation";
import LocalStorage from "./examples/localStorage";
import SessionStorage from "./examples/sessionStorage";
import DarkMode from "./examples/darkMode";
import MediaQuery from "./examples/mediaQuery/mediaQuery";
import CopyToClipboard from "./examples/copyToClipboard";
import ScrollPosition from "./examples/scrollPosition";
import AudioPlayer from "./examples/audioPlayer";
import NetworkStatus from "./examples/networkStatus";
import MultiStepForm from "./examples/multiStepForm";
import Animation from "./examples/animation";
import Pagination from "./examples/pagination";
import Async from "./examples/async";
import Throttling from "./examples/throttling";
import Debounce from "./examples/debounce";

function App() {
  return (
    <>
      <Pagination />
      <MediaQuery />
      <NetworkStatus />
      <DarkMode />
      <Animation />
      <Authentication />
      <Async />
      <Throttling />
      <Debounce />
      <MultiStepForm />
      <FormValidation />
      <ScrollPosition />
      <GeoLocation />
      <LocalStorage />
      <SessionStorage />
      <CopyToClipboard />
      <AudioPlayer />
    </>
  );
}

export default App;
