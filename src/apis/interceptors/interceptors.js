import axios from "axios";
import { routerStore } from "../../store/route";
import { RefreshAccessAPI } from "../user/userAPIs";
import { getCookieToken } from "../../storage/Cookie";
import { tokenStore } from "../../store/Auth";

const instance = axios.create({ baseURL: "https://lol.dshs.site/api" });

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    if (config.customConfig && config.customConfig.skipAuth) return config;

    let token = tokenStore.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status === 401 || error.response.status === 422) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      await refreshToken();

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokenStore.accessToken}`;

      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  if (!getCookieToken()) {
    routerStore.goToSignIn();
    return;
  }
  RefreshAccessAPI(getCookieToken())
    .then((res) => {
      tokenStore.setToken(res.data.access_token);
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export { instance };
