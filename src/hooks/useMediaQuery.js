import { useState, useEffect } from "react";

function useMediaQuery(query, initialValue = false) {
  const [matches, setMatches] = useState(initialValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Set the initial state
    setMatches(mediaQuery.matches);

    // Add listener for changes in the media query
    mediaQuery.addEventListener("change", handleChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
