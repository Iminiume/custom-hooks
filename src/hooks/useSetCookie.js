export function useSetCookie(name, value, daysToExpire) {
  const setCookie = (name, value, daysToExpire) => {
    if (!getCookie(name)) {
      console.log("first");
      const date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value}; ${expires}; path=/`;
      window.location.reload();
      console.log("Cookie", name, "Made succesfully");
    }
  };
  const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.reload();
    console.log("Cookie", name, "removed successfully");
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  return { setCookie, removeCookie, getCookie };
}
