import React from "react";
import styled from "styled-components";
import ChampionCard from "./components/championCard";
import ScoreBoard from "./components/scoreBoard";
import Loading from "../../components/loading";
import SideMenuBar from "./components/sideMenuBar";
import BeforeMatchView from "./components/beforeMatchView";
import Background from "../../components/background";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const GridContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
`;

const MatchView = observer(({ vm }) => {
  console.log(toJS(vm.BlueChampionData));
  if (vm.BlueChampionData === null) {
    return <Loading />;
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background />
        <div
          style={{
            display: "flex",
            width: "70%",
            height: "100%",
          }}
        >
          <GridContainer>
            <ChampionCard
              championName={vm.BlueChampionData.names.top}
              teamName={"Blue"}
            />
            <ChampionCard
              championName={vm.BlueChampionData.names.jungle}
              teamName={"Blue"}
            />
            <ChampionCard
              championName={vm.BlueChampionData.names.mid}
              teamName={"Blue"}
            />
            <ChampionCard
              championName={vm.BlueChampionData.names.adc}
              teamName={"Blue"}
            />
            <ChampionCard
              championName={vm.BlueChampionData.names.support}
              teamName={"Blue"}
            />

            <ChampionCard
              championName={vm.RedChampionData.names.top}
              teamName={"Red"}
            />
            <ChampionCard
              championName={vm.RedChampionData.names.jungle}
              teamName={"Red"}
            />
            <ChampionCard
              championName={vm.RedChampionData.names.mid}
              teamName={"Red"}
            />
            <ChampionCard
              championName={vm.RedChampionData.names.adc}
              teamName={"Red"}
            />
            <ChampionCard
              championName={vm.RedChampionData.names.support}
              teamName={"Red"}
            />
          </GridContainer>
        </div>

        {/* <ChampionCard championName={"Garen"} teamName={"Red"} />
      <ScoreBoard score={1} />
      <SideMenuBar score={1} />
      <BeforeMatchView /> */}
      </div>
    );
  }
});

export default MatchView;
