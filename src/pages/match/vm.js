import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import mockdata from "../../assets/mockdata/mockdata.json";

const development = true;
const dict = {
  bluetop: 0,
  bluejungle: 1,
  bluemid: 2,
  blueadc: 3,
  bluesupport: 4,
  redtop: 5,
  redjungle: 6,
  redmid: 7,
  redadc: 8,
  redsupport: 9,
};

async function getMatchData() {}

async function fetchWin(team) {
  await axios.post("/api/match/submit", {
    // auth_key: authKey,
    answer: team,
  });
}

function parseChampionNames(teamData) {
  const positions = ["adc", "jungle", "mid", "support", "top"];
  const names = {};
  const mosts = {};
  const winRates = {};

  positions.forEach((position) => {
    const championName = teamData[position]?.champ?.display_name;
    const mostChampion = teamData[position]?.most_pick?.display_name;
    const rate = teamData[position]?.win_rate;
    if (championName) {
      names[position] = championName;
      mosts[position] = mostChampion;
      winRates[position] = rate;
    }
  });
  const total = { names: names, mosts: mosts, winRates: winRates };

  return total;
}

async function parseMatchData(data) {
  const blueData = parseChampionNames(data.match.blue_team);
  const redData = parseChampionNames(data.match.red_team);

  return { blue: blueData, red: redData };
}

class MatchViewModel {
  isLoggedin = false;
  MatchData = null;

  BlueChampionData = null;
  RedChampionData = null;
  BeforeMatchData = null;
  myScore = null;
  currentRound = null;

  constructor() {
    makeAutoObservable(this);

    this.initialize();
  }

  async initialize() {
    const parsedData = await parseMatchData(mockdata.match);

    runInAction(() => {
      if (development) {
        this.isLoggedin = true;
        this.MatchData = parsedData;
        this.BlueChampionData = parsedData.blue;
        this.RedChampionData = parsedData.red;
        this.myScore = 3;
        this.currentRound = 5;
      }
    });
  }
}

export default MatchViewModel;
