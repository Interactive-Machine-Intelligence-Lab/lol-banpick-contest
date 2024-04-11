import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { routerStore } from "../../store/route";
import { tokenStore } from "../../store/Auth";
import { removeCookieToken } from "../../storage/Cookie";

async function parseLeaderBoard(data) {
  let result = [];
  data.forEach((element) => {
    result.push({
      name: element.name,
    });
  });
  return result;
}

async function parseMyBestScore(data) {
  const myRanking = data.rank;
  const totalRanking = data.num_users;
  const myScore = data.score;
  return { myRanking, totalRanking, myScore };
}

class HomeViewModel {
  LeaderBoardData = null;

  myRanking = null;
  totalRanking = null;
  myScore = null;

  constructor() {
    makeAutoObservable(this);
  }

  handleLoginClick = () => {
    routerStore.goToSignIn();
  };

  handleSignUpClick = () => {
    routerStore.goToSignUp();
  };

  handleLogoutClick = async () => {
    removeCookieToken();
    tokenStore.deleteToken();
    await this.removeMyData();
    routerStore.goToHome();
  };

  getLeaderBoardData = async () => {
    try {
      const response = await axios.get(
        "https://lol.dshs.site/api/leaderboard/total_leaderboard/10"
      );
      const parsedData = await parseLeaderBoard(response.data.leaderboard);
      runInAction(() => {
        this.LeaderBoardData = parsedData;
      });
    } catch (error) {
      console.error(error);
    }
  };

  getMyBestScore = async (token) => {
    try {
      const response = await axios.get(
        "https://lol.dshs.site/api/leaderboard/best_leaderboard",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const parsedData = await parseMyBestScore(response.data);
      runInAction(() => {
        this.myRanking = parsedData.myRanking;
        this.totalRanking = parsedData.totalRanking;
        this.myScore = parsedData.myScore;
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleStartClick = () => {
    if (tokenStore.authenticated) {
      routerStore.goToMatch();
    } else {
      routerStore.goToSignIn();
    }
  };

  async initialize() {
    runInAction(() => {
      this.getLeaderBoardData();
      if (tokenStore.authenticated) {
        this.getMyBestScore(tokenStore.accessToken);
      }
    });
  }

  async removeMyData() {
    runInAction(() => {
      this.myRanking = null;
      this.totalRanking = null;
      this.myScore = null;
    });
  }
}

export default HomeViewModel;
