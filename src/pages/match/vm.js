import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import mockdata from "../../assets/mockdata/mockdata.json";

const development = true;

const teamMap = {
  0: "blue_team",
  1: "red_team",
};
const positionMap = {
  0: "top",
  1: "jungle",
  2: "mid",
  3: "adc",
  4: "support",
};
const displayTeamMap = {
  blue_team: "Blue",
  red_team: "Red",
};
const displayPositionMap = {
  top: "Top",
  jungle: "Jungle",
  mid: "Mid",
  adc: "Adc",
  support: "Support",
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

async function parseAnswerData(data) {
  const score = data.total_score;
  const round = data.total_round;

  return { score: score, round: round };
}

function parseHistory(historyData) {
  let dataArray = [];
  for (let i = 0; i < 10; i++) {
    let data = {};
    let myPositionList = new Array(10).fill(false);
    data["winTeam"] = historyData[i].win_team;
    data["blue_team"] = historyData[i].blue_team;
    data["red_team"] = historyData[i].red_team;
    myPositionList[historyData[i].my_team * 5 + historyData[i].my_role] = true;
    data["myPosition"] = myPositionList;
    dataArray.push(data);
  }
  return dataArray;
}

function parseBeforeMatchData(data, index) {
  const teamIndex = Math.floor(index / 5);
  const positionIndex = index % 5;
  const team = teamMap[teamIndex];
  const position = positionMap[positionIndex];

  let Data = {};
  const BeforeMatchData = data.match[team][position];

  Data["currentTeam"] = displayTeamMap[team];
  Data["currentPosition"] = displayPositionMap[position];
  Data["currentChampion"] = BeforeMatchData.champ.display_name;
  Data["Most"] = BeforeMatchData.most_pick.display_name;
  Data["WinRate"] = BeforeMatchData.win_rate;
  Data["History"] = parseHistory(BeforeMatchData.history);

  return Data;
}

class MatchViewModel {
  isLoggedin = false;
  MatchData = null;
  isSideBarOpen = false;
  beforeMatchIndex = 0;
  isBeforeMatchOpen = false;

  BlueChampionData = null;
  RedChampionData = null;
  BeforeMatchData = null;
  myScore = null;
  currentRound = null;

  fetchWin = fetchWin;

  handleSideBar = () => {
    this.isSideBarOpen = !this.isSideBarOpen;
  };

  handleCloseBeforeMatch = () => {
    this.isBeforeMatchOpen = false;
  };

  handleBeforeMatch = (index) => {
    this.beforeMatchIndex = index;
    this.isBeforeMatchOpen = !this.isBeforeMatchOpen;
    const parsedBeforeMatchData = parseBeforeMatchData(
      mockdata.match,
      this.beforeMatchIndex
    );
    this.BeforeMatchData = parsedBeforeMatchData;
    console.log(parsedBeforeMatchData);
  };

  constructor() {
    makeAutoObservable(this);

    this.initialize();
  }

  async initialize() {
    const parsedData = await parseMatchData(mockdata.match);
    const parsedAnswer = await parseAnswerData(mockdata.postwin);

    runInAction(() => {
      if (development) {
        this.isLoggedin = true;
        this.MatchData = parsedData;
        this.BlueChampionData = parsedData.blue;
        this.RedChampionData = parsedData.red;
        this.myScore = parsedAnswer.score;
        this.currentRound = parsedAnswer.round;
      }
    });
  }
}

export default MatchViewModel;
