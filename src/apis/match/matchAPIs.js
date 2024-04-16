import { instance } from "../interceptors/interceptors";

const GetMatchAPI = async (token) => {
  try {
    const response = await instance.get("https://lol.dshs.site/api/match/get");
    return response;
  } catch (err) {
    console.log("An error occurred while fetching the match data: ", err);
    return err.response;
  }
};

const SubmitAnswerAPI = async (token, team) => {
  try {
    const response = await instance.post(
      "https://lol.dshs.site/api/match/submit",
      {
        answer: team,
      }
    );
    return response.data;
  } catch (err) {
    console.log("An error occurred while submitting the answer: ", err);
    return err;
  }
};

export { GetMatchAPI, SubmitAnswerAPI };
