import { useState } from "react";

function useSessionStorage(key, initialValue) {
  const storedValue = sessionStorage.getItem(key);

  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  const setStoredValue = (newValue) => {
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeStoredValue = () => {
    setValue(null);
    sessionStorage.removeItem(key);
  };

  return [value, setStoredValue, removeStoredValue];
}

export default useSessionStorage;
