import React from "react";
import useNotification from "../../hooks/useNotification";
import Button from "../../components/button";

function Notification() {
  const { notification, showNotification, hideNotification } =
    useNotification();

  const handleShowNotification = () => {
    showNotification("This is an info message", "info", 3000);
  };

  const handleShowErrorNotification = () => {
    showNotification("This is an error message", "error", 5000);
  };

  return (
    <div className="container">
      <h1>Notifiaction Example</h1>
      <Button onClick={handleShowNotification}>Show Info Notification</Button>
      <Button onClick={handleShowErrorNotification}>
        Show Error Notification
      </Button>

      {notification && (
        <div className={`notification ${notification.type} container`}>
          <p>{notification.message}</p>
          <Button onClick={hideNotification}>Close</Button>
        </div>
      )}
      {/* Your content */}
    </div>
  );
}

export default Notification;
