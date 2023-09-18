import { useState, useEffect } from "react";

function useDarkMode() {
  // Get the current URL search query
  const searchParams = new URLSearchParams(window.location.search);
  const isDarkModePreferred = searchParams.get("darkMode") === "true";

  // Set the initial state to the query-based preference or false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(isDarkModePreferred);

  // Update the URL query parameter based on dark mode preference
  useEffect(() => {
    // Update the URL query parameter based on dark mode preference
    const newQuery = isDarkMode ? "darkMode=true" : "darkMode=false";

    // Replace the current URL with the updated query parameter
    const newURL = `${window.location.pathname}?${newQuery}`;
    window.history.replaceState({}, "", newURL);

    // You can also apply your dark mode styles here if needed
    // Example: document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;
