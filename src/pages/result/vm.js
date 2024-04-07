import { makeAutoObservable, runInAction } from "mobx";
import mockdata from "../../assets/mockdata/mockdata.json";

const development = true;

async function parseBest(data) {
  return data;
}

async function parseCurrent(data) {
  return data;
}

class ResultViewModel {
  isLoggedin = false;

  totalPeople = null;
  myBestScore = null;
  myBestRanking = null;
  myCurrentScore = null;
  myCurrentRanking = null;

  constructor() {
    makeAutoObservable(this);

    this.initialize();
  }

  async initialize() {
    const parsedBestData = await parseBest(mockdata.result.best);
    const parsedCurrentData = await parseCurrent(mockdata.result.current);

    runInAction(() => {
      if (development) {
        this.isLoggedin = true;
        this.totalPeople = parsedBestData.total;
        this.myBestRanking = parsedBestData.rank;
        this.myBestScore = parsedBestData.score;
        this.myCurrentRanking = parsedCurrentData.rank;
        this.myCurrentScore = parsedCurrentData.score;
      }
    });
  }
}

export default ResultViewModel;
