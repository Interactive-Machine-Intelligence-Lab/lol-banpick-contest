import { instance } from "../interceptors/interceptors";

const BestLeaderboardAPI = async () => {
  try {
    const response = await instance.get(
      "https://lol.dshs.site/api/leaderboard/best_leaderboard"
    );
    return response.data;
  } catch (err) {
    console.log("An error occurred while fetching the match data: ", err);
    return err;
  }
};

const CurrentLeaderBoardAPI = async () => {
  const params = { return_prev_when_score_is_0: 1 };
  try {
    const response = await instance.get(
      "https://lol.dshs.site/api/leaderboard/current_leaderboard",
      { params: params }
    );
    return response.data;
  } catch (err) {
    console.log("An error occurred while fetching the match data: ", err);
    return err;
  }
};

const TotalLeaderBoardAPI = async () => {
  try {
    const response = await instance.get(
      "https://lol.dshs.site/api/leaderboard/total_leaderboard"
    );
    return response.data;
  } catch (err) {
    console.log("An error occurred while fetching the match data: ", err);
    return err;
  }
};

export { BestLeaderboardAPI, CurrentLeaderBoardAPI, TotalLeaderBoardAPI };
