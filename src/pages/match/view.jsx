import React from "react";
import ChampionCard from "./components/championCard";
import ScoreBoard from "./components/scoreBoard";
import SideMenuBar from "./components/sideMenuBar";

const MatchView = () => {
  return (
    <div>
      <ChampionCard championName={"Garen"} teamName={"Red"} />
      <ScoreBoard score={1} />
      <SideMenuBar score={1} />
    </div>
  );
};

export default MatchView;
