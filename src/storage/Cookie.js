import { Cookies } from "react-cookie";

const cookie = new Cookies();

const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expires = today.setDate(today.getDate() + 7);

  return cookie.set("refreshToken", refreshToken, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expires),
  });
};

const getCookieToken = () => {
  return cookie.get("refreshToken");
};

const removeCookieToken = () => {
  return cookie.remove("refreshToken", { sameSite: "strict", path: "/" });
};

export { setRefreshToken, getCookieToken, removeCookieToken };
