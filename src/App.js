import React, { useEffect } from "react";
import useGenerateUuid from "./hooks/useGenerateUuid";
import useSetCookie from "./hooks/useSetCookie";

function App() {
  const uuid = useGenerateUuid();
  const cookieName = "_uuid";
  const daysToExpire = 7;

  useSetCookie(cookieName, uuid, daysToExpire);

  return <div>App</div>;
}

export default App;
