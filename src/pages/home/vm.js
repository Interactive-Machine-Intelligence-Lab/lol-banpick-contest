import { makeAutoObservable, runInAction } from "mobx";
import mockdata from "../../assets/mockdata/mockdata.json";

const development = true;

async function parseLeaderBoard(data) {
  let result = [];
  data.forEach((element) => {
    result.push({
      name: element.name,
    });
  });
  return result;
}

class HomeViewModel {
  isLoggedin = false;
  LeaderBoardData = null;

  myRanking = null;
  totalRanking = null;
  myScore = null;

  constructor() {
    makeAutoObservable(this);

    this.initialize();
  }

  async initialize() {
    const parsedData = await parseLeaderBoard(mockdata.leaderboard.rank);
    runInAction(() => {
      if (development) {
        this.isLoggedin = true;
        this.LeaderBoardData = parsedData;
        this.myRanking = 1;
        this.totalRanking = 100;
        this.myScore = 50;
      }
    });
  }
}

export default HomeViewModel;
