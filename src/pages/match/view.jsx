import React, { useEffect } from "react";
import styled from "styled-components";
import ChampionCard from "./components/championCard";
import Loading from "../../components/loading";
import SideMenuBar from "./components/sideMenuBar";
import BeforeMatchView from "./components/beforeMatchView";
import WinPick from "./components/pickWin";
import Background from "../../components/background";
import SideMenuBtn from "../../assets/images/sidemenubutton.png";
import { observer } from "mobx-react";
import RoundBoard from "./components/roundBoard";

const MenuButtonContainerStyle = styled.div`
  position: fixed;
  width: 10vw;
  height: 10vh;
  top: 0;
  left: 0;

  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const GridContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-rows: 5fr 1fr 5fr;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
`;

const FullWidthBox = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const MatchView = observer(({ vm }) => {
  useEffect(() => {
    vm.initialize();
  }, [vm]);

  if (vm.RawData === null) {
    return <Loading />;
  } else {
    return (
      <div>
        <SideMenuBar
          score={vm.myScore}
          isOpen={vm.isSideBarOpen}
          handleOpen={vm.handleSideBar}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuButtonContainerStyle>
            <img
              src={SideMenuBtn}
              style={{ width: "20%" }}
              alt="menubtn"
              onClick={vm.handleSideBar}
            />
          </MenuButtonContainerStyle>
          <Background />
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "5vh",
              justifyContent: "center",
              alignItems: "center",
              margin: 15,
            }}
          >
            <RoundBoard round={vm.currentRound} />
          </div>
          <div
            style={{
              display: vm.isBeforeMatchOpen ? "flex" : "none",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <BeforeMatchView
              data={vm.BeforeMatchData}
              handleClose={vm.handleCloseBeforeMatch}
            />
          </div>

          <div
            style={{
              display: "flex",
              width: "70%",
              height: "100%",
            }}
          >
            <GridContainer>
              <ChampionCard
                championName={vm.BlueChampionData?.names?.top}
                teamPosition={"Blue\nTop"}
                onClickF={vm.handleBeforeMatch}
                index={0}
              />
              <ChampionCard
                championName={vm.BlueChampionData?.names?.jungle}
                teamPosition={"Blue\nJungle"}
                onClickF={vm.handleBeforeMatch}
                index={1}
              />
              <ChampionCard
                championName={vm.BlueChampionData?.names?.mid}
                teamPosition={"Blue\nMid"}
                onClickF={vm.handleBeforeMatch}
                index={2}
              />
              <ChampionCard
                championName={vm.BlueChampionData?.names?.adc}
                teamPosition={"Blue\nAdc"}
                onClickF={vm.handleBeforeMatch}
                index={3}
              />
              <ChampionCard
                championName={vm.BlueChampionData?.names?.support}
                teamPosition={"Blue\nSupport"}
                onClickF={vm.handleBeforeMatch}
                index={4}
              />

              <FullWidthBox>
                <WinPick
                  round={vm.currentRound}
                  score={vm.myScore}
                  fetchFunction={vm.fetchWin}
                />
              </FullWidthBox>

              <ChampionCard
                championName={vm.RedChampionData?.names?.top}
                teamPosition={"Red\nTop"}
                onClickF={vm.handleBeforeMatch}
                index={5}
              />
              <ChampionCard
                championName={vm.RedChampionData?.names?.jungle}
                teamPosition={"Red\nJungle"}
                onClickF={vm.handleBeforeMatch}
                index={6}
              />
              <ChampionCard
                championName={vm.RedChampionData?.names?.mid}
                teamPosition={"Red\nMid"}
                onClickF={vm.handleBeforeMatch}
                index={7}
              />
              <ChampionCard
                championName={vm.RedChampionData?.names?.adc}
                teamPosition={"Red\nAdc"}
                onClickF={vm.handleBeforeMatch}
                index={8}
              />
              <ChampionCard
                championName={vm.RedChampionData?.names?.support}
                teamPosition={"Red\nSupport"}
                onClickF={vm.handleBeforeMatch}
                index={9}
              />
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
});

export default MatchView;
