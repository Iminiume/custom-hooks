import { useState } from "react";

function useNotification() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = "info", duration = 3000) => {
    setNotification({ message, type });

    // Automatically hide the notification after a specified duration
    if (duration > 0) {
      setTimeout(() => {
        hideNotification();
      }, duration);
    }
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return {
    notification,
    showNotification,
    hideNotification,
  };
}

export default useNotification;
