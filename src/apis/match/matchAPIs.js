import axios from "axios";

const GetMatchAPI = async (token) => {
  const response = await axios.get("https://lol.dshs.site/api/match/get", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const SubmitAnswerAPI = async (token, team) => {
  const response = await axios.post(
    "https://lol.dshs.site/api/match/submit",
    {
      answer: team,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export { GetMatchAPI, SubmitAnswerAPI };
