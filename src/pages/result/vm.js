import { makeAutoObservable, runInAction } from "mobx";
import { tokenStore } from "../../store/Auth";
import {
  BestLeaderboardAPI,
  CurrentLeaderBoardAPI,
} from "../../apis/rank/rankAPIs";
import { routerStore } from "../../store/route";

async function parseMyScore(data) {
  const myRanking = data.rank;
  const totalRanking = data.num_users;
  const myScore = data.score;
  return { myRanking, totalRanking, myScore };
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
  }

  getMyBestScore = async () => {
    const response = await BestLeaderboardAPI();
    const parsedData = await parseMyScore(response);
    runInAction(() => {
      this.myBestRanking = parsedData.myRanking;
      this.totalRanking = parsedData.totalRanking;
      this.myBestScore = parsedData.myScore;
    });
  };

  getMyCurrentScore = async () => {
    const response = await CurrentLeaderBoardAPI();
    const parsedData = await parseMyScore(response);
    runInAction(() => {
      this.myCurrentRanking = parsedData.myRanking;
      this.myCurrentScore = parsedData.myScore;
    });
  };

  async initialize() {
    runInAction(() => {
      if (tokenStore.authenticated) {
        this.getMyBestScore();
        this.getMyCurrentScore();
      }
    });
  }
}

export default ResultViewModel;
