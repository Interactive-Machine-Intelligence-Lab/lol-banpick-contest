import axios from "axios";
import { RefreshAccessAPI } from "../user/userAPIs";
import { getCookieToken } from "../../storage/Cookie";
import { tokenStore } from "../../store/Auth";

const instance = axios.create();

// 요청 인터셉터
axios.interceptors.request.use((config) => {
  if (!config.headers) return config;

  let token = tokenStore.accessToken;

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const refreshBrowser = async () => {
  if (tokenStore.accessToken === null) {
    RefreshAccessAPI(getCookieToken())
      .then((res) => {
        tokenStore.setToken(res.data.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default refreshBrowser;
