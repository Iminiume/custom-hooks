import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

function DarkMode() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <button onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}>
      Toggle Dark Mode
    </button>
  );
}

export default DarkMode;
