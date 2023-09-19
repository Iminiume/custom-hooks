import { useState, useEffect } from "react";

function useAnimation(animationFunction, duration = 1000) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let animationId;

    if (isActive) {
      const start = performance.now();
      const animate = (time) => {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);

        animationFunction(progress);

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };

      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isActive, animationFunction, duration]);

  const startAnimation = () => {
    setIsActive(true);
  };

  const stopAnimation = () => {
    setIsActive(false);
  };

  return { isActive, startAnimation, stopAnimation };
}

export default useAnimation;
