import { makeAutoObservable, runInAction } from "mobx";
import { tokenStore } from "../../store/Auth";
import {
  BestLeaderboardAPI,
  CurrentLeaderBoardAPI,
} from "../../apis/rank/rankAPIs";
import { routerStore } from "../../store/route";
import mockdata from "../../assets/mockdata/mockdata.json";

const development = true;

async function parseMyScore(data) {
  const myRanking = data.rank;
  const totalRanking = data.num_users;
  const myScore = data.score;
  return { myRanking, totalRanking, myScore };
}

async function parseCurrent(data) {
  return data;
}

class ResultViewModel {
  totalRanking = null;
  myBestScore = null;
  myBestRanking = null;
  myCurrentScore = null;
  myCurrentRanking = null;

  handleGoHomeClick = () => {
    routerStore.goToHome();
  };

  handleRetryClick = () => {
    routerStore.goToMatch();
  };

  constructor() {
    makeAutoObservable(this);

    this.initialize();
  }

  getMyBestScore = async (token) => {
    const response = await BestLeaderboardAPI(token);
    const parsedData = await parseMyScore(response);
    runInAction(() => {
      this.myBestRanking = parsedData.myRanking;
      this.totalRanking = parsedData.totalRanking;
      this.myBestScore = parsedData.myScore;
    });
  };

  getMyCurrentScore = async (token) => {
    const response = await CurrentLeaderBoardAPI(token);
    const parsedData = await parseMyScore(response);
    runInAction(() => {
      this.myCurrentRanking = parsedData.myRanking;
      this.myCurrentScore = parsedData.myScore;
    });
  };

  async initialize() {
    runInAction(() => {
      if (tokenStore.authenticated) {
        this.getMyBestScore(tokenStore.accessToken);
        this.getMyCurrentScore(tokenStore.accessToken);
      }
    });
  }
}

export default ResultViewModel;
