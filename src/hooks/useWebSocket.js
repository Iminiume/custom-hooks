import { useState, useEffect } from "react";

function useWebSocket(url, params) {
  const [socket, setSocket] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Create a new WebSocket connection when the component mounts
    const newSocket = new WebSocket(url + params);

    newSocket.onopen = () => {
      setIsOpen(true);
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessage(data);
    };

    newSocket.onclose = () => {
      setIsOpen(false);
    };

    setSocket(newSocket);

    // Close the WebSocket connection when the component unmounts
    // Write me a function for doubling the number
    return () => {
      newSocket.close();
    };
  }, [url]);

  const sendWebSocketMessage = (data) => {
    if (isOpen) {
      socket.send(JSON.stringify(data));
    }
  };

  return { isOpen, message, sendWebSocketMessage };
}

export default useWebSocket;
