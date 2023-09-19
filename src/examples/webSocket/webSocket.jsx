import React, { useCallback, useState } from "react";
import useWebSocket from "../../hooks/useWebSocket";
import Button from "../../components/button";

function WebSocket() {
  const [inputMessage, setInputMessage] = useState("");
  const { isOpen, message, sendWebSocketMessage } = useWebSocket(
    "wss://sock.mailsac.com/incoming-messages",
    "?key=k_Ky1532r0ZbTkqL5Uk4R4SicPXcZZCCuNq0A739f&addresses=iminiume@gmail.com"
  );

  const handleMessageSend = () => {
    sendWebSocketMessage({ text: inputMessage });
    setInputMessage("");
  };

  const renderWebSocketExample = useCallback(() => {
    return (
      <div className="container">
        <h1>WebSocket Example</h1>
        <p>WebSocket Status: {isOpen ? "Connected" : "Disconnected"}</p>
        <div className="container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
          />
          <Button onClick={handleMessageSend}>Send</Button>
        </div>
        {message && <p>Received Message: {message.text}</p>}
      </div>
    );
  }, [inputMessage]);

  return <>{renderWebSocketExample()}</>;
}

export default WebSocket;
