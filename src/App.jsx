import React, { useEffect, useCallback, useState } from "react";
import WebSocket from "./examples/webSocket";
import FormValidation from "./examples/formValidation";
import Authentication from "./examples/authentication";

function App() {
  return (
    <>
      <Authentication />
      <WebSocket />
      <FormValidation />
    </>
  );
}

export default App;
