import { makeAutoObservable, runInAction } from "mobx";
import { tokenStore } from "../../store/Auth";
import MockData from "../../assets/mockdata/mockdata.json";
import { GetMatchAPI, SubmitAnswerAPI } from "../../apis/match/matchAPIs";
import { toJS } from "mobx";

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

async function getMatchData() {
  if (tokenStore.authenticated) {
    const token = tokenStore.accessToken;
    const response = await GetMatchAPI(token);
    return response;
  } else {
    return null;
  }
}

async function submitAnswer(team) {
  if (tokenStore.authenticated) {
    const token = tokenStore.accessToken;
    const response = await SubmitAnswerAPI(token, team);
    return response;
  } else {
    return null;
  }
}

function parseChampionNames(teamData) {
  const positions = ["adc", "jungle", "mid", "support", "top"];
  const names = {};
  const mosts = {};
  const winRates = {};

  const dataEachPositions = [
    teamData?.adc,
    teamData?.jungle,
    teamData?.mid,
    teamData?.support,
    teamData?.top,
  ];

  dataEachPositions.forEach((data, index) => {
    const championName = data?.champ?.display_name;
    const mostChampion = data?.most_pick?.display_name;
    const rate = data?.win_rate;

    names[positions[index]] = championName;
    mosts[positions[index]] = mostChampion;
    winRates[positions[index]] = rate;
  });
  const total = { names: names, mosts: mosts, winRates: winRates };

  return total;
}

async function parseMatchData(data) {
  const blueData = parseChampionNames(data?.match?.blue_team);
  const redData = parseChampionNames(data?.match?.red_team);

  return { blue: blueData, red: redData };
}

async function parseAnswerData(data) {
  const score = data?.score;
  const round = data?.round;

  return { score: score, round: round };
}

function parseHistory(historyData) {
  let dataArray = [];
  for (let i = 0; i < 10; i++) {
    let data = {};
    let myPositionList = new Array(10).fill(false);
    data["winTeam"] = historyData[i]?.win_team;
    data["blue_team"] = historyData[i]?.blue_team;
    data["red_team"] = historyData[i]?.red_team;
    myPositionList[
      historyData[i]?.my_team * 5 + historyData[i]?.my_role
    ] = true;
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
  const BeforeMatchData = data?.match[team][position];

  Data["currentTeam"] = displayTeamMap[team];
  Data["currentPosition"] = displayPositionMap[position];
  Data["currentChampion"] = BeforeMatchData?.champ?.display_name;
  Data["Most"] = BeforeMatchData?.most_pick?.display_name;
  Data["WinRate"] = BeforeMatchData?.win_rate;
  Data["History"] = parseHistory(BeforeMatchData?.history);

  return Data;
}

class MatchViewModel {
  RawData = null;

  MatchData = null;
  isSideBarOpen = false;
  beforeMatchIndex = 0;
  isBeforeMatchOpen = false;

  BlueChampionData = null;
  RedChampionData = null;
  BeforeMatchData = null;
  myScore = null;
  currentRound = null;

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
      this.RawData,
      this.beforeMatchIndex
    );
    this.BeforeMatchData = parsedBeforeMatchData;
  };

  handleSubmitWin = (team) => {
    submitAnswer(team);
    this.initialize();
  };

  constructor() {
    makeAutoObservable(this);
  }

  async initialize() {
    this.RawData = await getMatchData();
    const parsedData = await parseMatchData(this.RawData);
    const parsedAnswer = await parseAnswerData(this.RawData);

    runInAction(() => {
      this.MatchData = parsedData;
      this.BlueChampionData = parsedData.blue;
      this.RedChampionData = parsedData.red;
      this.myScore = parsedAnswer.score;
      this.currentRound = parsedAnswer.round;
    });
  }
}

export default MatchViewModel;
