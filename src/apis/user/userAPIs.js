import axios from "axios";

const UserRegisterAPI = async (context) => {
  const response = await axios.post(
    "https://lol.dshs.site/api/auth/register",
    context
  );
  return response;
};

const LogInAPI = async (context) => {
  const response = await axios.post(
    "https://lol.dshs.site/api/auth/login",
    context
  );
  return response;
};

const RefreshToken = async (token) => {
  const response = await axios.get("https://lol.dshs.site/api/auth/refresh", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

const ResetAccountAPI = async (token) => {
  const response = await axios.post(
    "https://lol.dshs.site/api/auth/reset_account",
    null,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};

export { UserRegisterAPI, LogInAPI, RefreshToken, ResetAccountAPI };
