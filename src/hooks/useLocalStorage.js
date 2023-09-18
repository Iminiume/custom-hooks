import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // Retrieve the stored value from localStorage on initial render
  const storedValue = localStorage.getItem(key);

  // Initialize the state with the stored value or the provided initial value
  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // Function to update the value in localStorage and state
  const setStoredValue = (newValue) => {
    // Update the state
    setValue(newValue);
    // Update localStorage
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Function to remove the item from localStorage and state
  const removeStoredValue = () => {
    // Remove from state
    setValue("");
    // Remove from localStorage
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, removeStoredValue];
}

export default useLocalStorage;
