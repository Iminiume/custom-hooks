import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

function MediaQuery() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const isLargeScreen = useMediaQuery("(min-width: 1025px)");

  return (
    <div className="container">
      <h1>MediaQuery Example</h1>
      {isSmallScreen && <p>This is a small screen.</p>}
      {isMediumScreen && <p>This is a medium screen.</p>}
      {isLargeScreen && <p>This is a large screen.</p>}
      {/* Your responsive content */}
    </div>
  );
}

export default MediaQuery;
