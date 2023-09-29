import { useState, useEffect } from "react";

const useDebounce = (callback, delay) => {
  const [debouncedCallback, setDebouncedCallback] = useState(callback);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCallback(() => callback);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);

  return debouncedCallback;
};

export default useDebounce;
