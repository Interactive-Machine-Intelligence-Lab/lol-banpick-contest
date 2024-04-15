import axios from "axios";

const BestLeaderboardAPI = async (token) => {
  try {
    const response = await axios.get(
      "https://lol.dshs.site/api/leaderboard/best_leaderboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("An error occurred while fetching the match data: ", err);
    return err;
  }
};

const CurrentLeaderBoardAPI = async (token) => {
  const params = { return_prev_when_score_is_0: 1 };
  try {
    const response = await axios.get(
      "https://lol.dshs.site/api/leaderboard/current_leaderboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: params,
      }
    );
    return response.data;
  } catch (err) {
    console.log("An error occurred while fetching the match data: ", err);
    return err;
  }
};

const TotalLeaderBoardAPI = async () => {
  try {
    const response = await axios.get(
      "https://lol.dshs.site/api/leaderboard/total_leaderboard"
    );
    return response.data;
  } catch (err) {
    console.log("An error occurred while fetching the match data: ", err);
    return err;
  }
};

export { BestLeaderboardAPI, CurrentLeaderBoardAPI, TotalLeaderBoardAPI };
