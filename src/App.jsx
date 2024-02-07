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
import AudioPlayer from "./examples/audioPlayer";
import InfinityScroll from "./examples/infinityScroll";
import NetworkStatus from "./examples/networkStatus";
import MultiStepForm from "./examples/multiStepForm";
import Animation from "./examples/animation";
import DragAndDrop from "./examples/dragAndDrop";
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
      <DragAndDrop />
      <WebSocket />
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
      <Notification />
      <AudioPlayer />
      <InfinityScroll />
    </>
  );
}

export default App;
