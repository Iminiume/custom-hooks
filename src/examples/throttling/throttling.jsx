import React, { useState } from "react";
import useThrottle from "../../hooks/useThrottling";

const Throttling = () => {
  const [count, setCount] = useState(0);
  const throttledIncrement = useThrottle(() => setCount(count + 1), 1000); // Throttle the increment function

  return (
    <div>
      <h1>Throttling Example</h1>
      <p>Count: {count}</p>
      <button onClick={throttledIncrement}>Increment</button>
    </div>
  );
};

export default Throttling;
