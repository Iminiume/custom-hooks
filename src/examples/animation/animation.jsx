import React from "react";
import useAnimation from "../../hooks/useAnimation";
import Button from "../../components/button";

function Animation() {
  const { isActive, startAnimation, stopAnimation } = useAnimation(
    (progress) => {
      // Customize your animation logic here
      const element = document.getElementById("animated-element");
      element.style.transform = `translateX(${progress * 100}px)`;
    },
    2000
  ); // Animation duration in milliseconds

  return (
    <div className="container">
      <h1>Animation Example</h1>
      <div
        id="animated-element"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
          //   position: "absolute",
        }}
      />
      <Button onClick={startAnimation}>Start Animation</Button>
      <Button onClick={stopAnimation}>Stop Animation</Button>
      <p>Animation {isActive ? "is active" : "stopped"}</p>
    </div>
  );
}

export default Animation;
