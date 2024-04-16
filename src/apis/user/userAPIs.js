import { instance } from "../interceptors/interceptors";

const UserRegisterAPI = async (context) => {
  const response = await instance.post(
    "https://lol.dshs.site/api/auth/register",
    context,
    { customConfig: { skipAuth: true } }
  );
  return response;
};

const LogInAPI = async (context) => {
  const response = await instance.post(
    "https://lol.dshs.site/api/auth/login",
    context,
    { customConfig: { skipAuth: true } }
  );
  return response;
};

const RefreshAccessAPI = async () => {
  const response = await instance.get("https://lol.dshs.site/api/auth/refresh");
  return response;
};

const ResetAccountAPI = async () => {
  const response = await instance.post(
    "https://lol.dshs.site/api/auth/reset_account",
    null
  );
  return response;
};

export { UserRegisterAPI, LogInAPI, RefreshAccessAPI, ResetAccountAPI };
