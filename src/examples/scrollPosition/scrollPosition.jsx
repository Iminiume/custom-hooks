import React from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

function ScrollPosition() {
  const scrollPosition = useScrollPosition();
  return (
    <div className="container">
      <h1>ScrollPosition Example</h1>
      <h2>{scrollPosition}</h2>
    </div>
  );
}

export default ScrollPosition;
