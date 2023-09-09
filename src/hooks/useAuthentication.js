import { useState, useEffect } from "react";
import { useSetCookie } from "./useSetCookie";

const TOKEN_KEY = "authToken";

function useAuthentication() {
  const { setCookie, removeCookie, getCookie } = useSetCookie();

  const expiredDate = 7;

  const login = (newToken, newUser) => {
    setCookie(TOKEN_KEY, newToken, expiredDate);
  };

  const logout = () => {
    removeCookie(TOKEN_KEY);
  };

  return { login, logout };
}

export default useAuthentication;
