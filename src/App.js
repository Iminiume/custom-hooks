import React, { useEffect, useCallback } from "react";
import useGenerateUuid from "./hooks/useGenerateUuid";
import { useSetCookie } from "./hooks/useSetCookie";
import useAuthentication from "./hooks/useAuthentication";
import useUserToken from "./hooks/useUserToken";

function App() {
  const { setCookie, getCookie } = useSetCookie();
  const uuid = useGenerateUuid();
  const cookieName = "_uuid";
  const daysToExpire = 7;
  useEffect(() => {
    setCookie(cookieName, uuid, daysToExpire);
  }, [uuid]);

  const TOKEN_KEY = "authToken";
  const authToken = getCookie(TOKEN_KEY);
  const { login, logout } = useAuthentication(TOKEN_KEY);
  const userToken = useUserToken(32);
  const handleLogin = () => {
    login(userToken);
  };
  const handleLogout = () => {
    logout();
  };

  const renderAuthClient = useCallback(() => {
    return (
      <div>
        {authToken ? (
          <div>
            <p>Welcome</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please log in</p>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
  }, [authToken]);

  return <>{renderAuthClient()}</>;
}

export default App;
