import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import Button from "../../components/button";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Dark Mode Example</h1>
      <Button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
      {/* Your DarkMode content */}
    </div>
  );
}

export default DarkMode;
