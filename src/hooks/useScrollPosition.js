import { useState, useEffect } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to update the scroll position
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", updateScrollPosition);

    // Call the function once to get the initial scroll position
    updateScrollPosition();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
