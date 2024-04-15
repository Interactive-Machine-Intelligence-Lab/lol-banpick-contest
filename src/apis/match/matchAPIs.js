import axios from "axios";

const GetMatchAPI = async (token) => {
  try {
    const response = await axios.get("https://lol.dshs.site/api/match/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log("An error occurred while fetching the match data: ", err);
    return err.response;
  }
};

const SubmitAnswerAPI = async (token, team) => {
  try {
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
  } catch (err) {
    console.log("An error occurred while submitting the answer: ", err);
    return err;
  }
};

export { GetMatchAPI, SubmitAnswerAPI };
