import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import mockdata from "../../assets/mockdata/mockdata.json";

const development = false;

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

  async initialize() {
    const parsedData = await parseLeaderBoard(mockdata.leaderboard.rank);
    runInAction(() => {
      if (development) {
        this.isLoggedin = true;
        this.LeaderBoardData = parsedData;
        this.myRanking = 1;
        this.totalRanking = 100;
        this.myScore = 50;
      } else {
        this.getLeaderBoardData();
      }
    });
  }
}

export default HomeViewModel;
