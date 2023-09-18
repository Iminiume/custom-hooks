import React, { useCallback, useEffect } from "react";
import useUserToken from "../../hooks/useUserToken";
import useAuthentication from "../../hooks/useAuthentication";
import { useSetCookie } from "../../hooks/useSetCookie";
import useGenerateUuid from "../../hooks/useGenerateUuid";
import Button from "../../components/button";

function Authentication() {
  // Adding uuid to the cookies in the first render
  const { setCookie, getCookie } = useSetCookie();
  const uuid = useGenerateUuid();
  const cookieName = "_uuid";
  const daysToExpire = 7;
  useEffect(() => {
    setCookie(cookieName, uuid, daysToExpire);
  }, [uuid]);

  // Adding authToken to the cookies (cause it is not initilized at the first render we should reload the page)
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

  const renderAuthExample = useCallback(() => {
    return (
      <div className="container">
        {authToken ? (
          <div className="container">
            <p>Welcome</p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className="container">
            <p>Please log in</p>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        )}
      </div>
    );
  }, [authToken]);
  return <>{renderAuthExample()}</>;
}

export default Authentication;
