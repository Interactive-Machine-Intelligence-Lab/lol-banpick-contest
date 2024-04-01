import React from "react";
import ChampionCard from "./components/championCard";
import ScoreBoard from "./components/scoreBoard";
import SideMenuBar from "./components/sideMenuBar";
import BeforeMatchView from "./components/beforeMatchView";

const MatchView = () => {
  return (
    <div>
      <ChampionCard championName={"Garen"} teamName={"Red"} />
      <ScoreBoard score={1} />
      <SideMenuBar score={1} />
      <BeforeMatchView />
    </div>
  );
};

export default MatchView;
