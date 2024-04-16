import { makeAutoObservable, runInAction } from "mobx";
import { routerStore } from "../../store/route";
import { tokenStore } from "../../store/Auth";
import { removeCookieToken } from "../../storage/Cookie";
import {
  TotalLeaderBoardAPI,
  BestLeaderboardAPI,
} from "../../apis/rank/rankAPIs";

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
    const response = await TotalLeaderBoardAPI();
    const parsedData = await parseLeaderBoard(response.leaderboard);
    runInAction(() => {
      this.LeaderBoardData = parsedData;
    });
  };

  getMyBestScore = async (token) => {
    const response = await BestLeaderboardAPI();
    const parsedData = await parseMyBestScore(response);
    runInAction(() => {
      this.myRanking = parsedData.myRanking;
      this.totalRanking = parsedData.totalRanking;
      this.myScore = parsedData.myScore;
    });
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
