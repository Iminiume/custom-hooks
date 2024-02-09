import React, { useEffect } from "react";
import useDarkMode from "../../hooks/useDarkMode";

function Layout({ children }) {
  const [darkMode, setDarkMode] = useDarkMode();
  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);
  return (
    <div className={`container ${darkMode ? "darkTheme" : "lightTheme"}`}>
      {children}
    </div>
  );
}

export default Layout;
