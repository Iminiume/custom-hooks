import { useState, useEffect } from "react";

function generateRandomToken(tokenLength) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}

function useUserToken(tokenLength = 64) {
  const [authToken, setAuthToken] = useState(generateRandomToken(tokenLength));

  useEffect(() => {
    const newToken = generateRandomToken(tokenLength);
    setAuthToken(newToken);
  }, [tokenLength]);

  return authToken;
}

export default useUserToken;
