import React, { useEffect, useCallback, useState } from "react";

import useGenerateUuid from "./hooks/useGenerateUuid";
import { useSetCookie } from "./hooks/useSetCookie";
import useAuthentication from "./hooks/useAuthentication";
import useUserToken from "./hooks/useUserToken";
import useWebSocket from "./hooks/useWebSocket";

function App() {
  // Adding uuid to the cookies in the first render
  const { setCookie, getCookie } = useSetCookie();
  const uuid = useGenerateUuid();
  const cookieName = "_uuid";
  const daysToExpire = 7;
  useEffect(() => {
    setCookie(cookieName, uuid, daysToExpire);
  }, [uuid]);

  // Adding authToken to the cookies (cause it is not initilized at the first render we should reload the page)
  const TOKEN_KEY = "authToken";
  const authToken = getCookie(TOKEN_KEY);
  const { login, logout } = useAuthentication(TOKEN_KEY);
  const userToken = useUserToken(32);

  const handleLogin = () => {
    login(userToken);
  };
  const handleLogout = () => {
    logout();
  };

  const renderAuthExample = useCallback(() => {
    return (
      <div>
        {authToken ? (
          <div>
            <p>Welcome</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please log in</p>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
  }, [authToken]);

  // Using the websocket to update the browserk

  const [inputMessage, setInputMessage] = useState("");
  const { isOpen, message, sendWebSocketMessage } = useWebSocket(
    "wss://www.example.com/socketserver"
  );

  const handleMessageSend = () => {
    sendWebSocketMessage({ text: inputMessage });
    setInputMessage("");
  };

  const renderWebSocketExample = useCallback(() => {
    return (
      <div>
        <h1>WebSocket Example</h1>
        <p>WebSocket Status: {isOpen ? "Connected" : "Disconnected"}</p>
        <div>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleMessageSend}>Send</button>
        </div>
        {message && <p>Received Message: {message.text}</p>}
      </div>
    );
  }, [inputMessage]);

  return (
    <>
      {renderAuthExample()}
      {renderWebSocketExample()}
    </>
  );
}

export default App;
