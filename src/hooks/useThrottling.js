import { useState, useEffect } from "react";

const useThrottle = (callback, delay) => {
  const [throttledCallback, setThrottledCallback] = useState(callback);
  const [lastExecuted, setLastExecuted] = useState(0);

  useEffect(() => {
    const now = Date.now();
    if (now - lastExecuted >= delay) {
      setThrottledCallback(() => callback);
      setLastExecuted(now);
    }
  }, [callback, delay, lastExecuted]);

  return throttledCallback;
};

export default useThrottle;
