import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

function Layout({ children }) {
  const [isDarkMode] = useDarkMode();

  return (
    <div className={`container ${isDarkMode ? "darkTheme" : "lightTheme"}`}>
      {children}
    </div>
  );
}

export default Layout;
