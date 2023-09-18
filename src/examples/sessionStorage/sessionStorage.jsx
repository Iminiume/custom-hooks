import React from "react";
import useSessionStorage from "../../hooks/useSessionStorage";
import Button from "../../components/button";

function SessionStorage() {
  const [token, setToken, removeToken] = useSessionStorage("token", null);

  const handleLogin = () => {
    // Simulate login logic
    const fakeToken = "your-fake-auth-token";
    setToken(fakeToken);
  };

  const handleLogout = () => {
    removeToken();
  };

  return (
    <div className="container">
      <h1>SessionStorage Example</h1>
      {token ? (
        <div className="container">
          <p>Welcome! You are logged in.</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <div className="container">
          <p>You are not logged in.</p>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      )}
    </div>
  );
}

export default SessionStorage;
