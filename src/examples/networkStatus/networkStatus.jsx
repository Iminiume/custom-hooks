import React from "react";
import useNetworkStatus from "../../hooks/useNetworkStatus";

function NetworkStatus() {
  const isOnline = useNetworkStatus();

  return (
    <div className="container">
      <h1>NetworkStatus Example</h1>
      <p>User is {isOnline ? "online" : "offline"}.</p>
      {/* Your content */}
    </div>
  );
}

export default NetworkStatus;
