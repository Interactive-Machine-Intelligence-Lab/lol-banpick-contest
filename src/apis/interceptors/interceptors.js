import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";
import { tokenStore } from "../../store/Auth";

const instance = axios.create();

// 요청 인터셉터
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // 요청 오류 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  async function (response) {
    // 응답 데이터가 있는 작업 수행
    // 2xx 범위에 있는 상태 코드일 경우 트리거
    return response;
  },
  async function (error) {
    // 응답 오류가 있는 작업 수행
    // 2xx 외의 범위에 있는 상태 코드일 경우 트리거
    return Promise.reject(error);
  }
);

// 요청 인터셉터
instance.interceptors.request.use(
  function (config) {
    // 스토리지에서 토큰을 가져온다.
    const accessToken = tokenStore.accessToken;
    const refreshToken = getCookieToken();

    // 토큰이 있으면 요청 헤더에 추가한다.
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    // Refresh 토큰을 보낼 경우 사용하고자 하는 커스텀 인증 헤더를 사용하면 된다.
    if (refreshToken) {
      config.headers["x-refresh-token"] = refreshToken;
    }

    return config;
  },
  function (error) {
    // 요청 오류 처리
    return Promise.reject(error);
  }
);

export default instance;
