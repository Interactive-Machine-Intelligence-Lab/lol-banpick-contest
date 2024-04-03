import React from "react";
import BlurredBox from "../../components/blurredbox";
import GoldCircle from "../../components/GoldCircle";
import Background from "../../components/background";
import Button from "../../components/button";
import ContextBox from "../../components/contextbox";
import ScoreCircle from "../../components/scorecircle";
import TitleTextStyle from "../../components/titletext";
import MenuBar from "./components/menubar";
import styled from "styled-components";
import { observer } from "mobx-react";

const sizes = {
  sm: "400px",
  md: "760px",
  lg: "1150px",
  xl: "1440px",
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => `
      @media (min-width: ${sizes[label]}) {
      ${args}
      }
  `;
  return acc;
}, {});

const ResponsiveMenuBarContainer = styled.div`
  ${media.sm`display: none;`};
  ${media.md`display: block; font-size: 10px;`};
  ${media.lg`display: block; font-size: 14px;`};
`;

const MenuButtonContainerStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 22%;
  height: 100%;
  margin-right: 5%;
`;

const MenuButtonStyle = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

const ResponsiveButtonContainer = styled.div`
  display: flex;
  height: 15vh;
  align-items: center;
  justify-content: center;
  margin-top: 2%;

  ${media.sm`display: block; font-size: 20px;`};
  ${media.md`display: block; font-size: 28px;`};
  ${media.lg`display: block; font-size: 40px;`};
`;

const ResponsiveTitleContainer = styled.div`
  ${media.sm`display: block; font-size: 60px; margin-top: 10%;`};
  ${media.md`display: block; font-size: 80px; margin-top: 2.5%;`};
  ${media.lg`display: block; font-size: 96px; margin-top: 2.5%;`};
`;

const GridView = styled.div`
  width: 1000px;
  align-self: center;
  display: grid;
  row-gap: 100px;
  column-gap: 100px;
  align-items: center;
  justify-items: center;

  ${media.sm`grid-template-columns: 1fr; column-gap: 0px; row-gap: 50px;`};
  ${media.md`grid-template-columns: 1fr 1fr;`};
  ${media.lg`grid-template-columns: 1fr 1fr;`};
`;

const ContextBoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  ${media.sm`display: block; width: 420px; height: 484px;`};
  ${media.md`display: block; width: 420px; height: 484px;`};
  ${media.lg`display: block; width: 420px; height: 484px;`};
`;

const HomeView = observer(({ vm }) => {
  console.log(vm.isLoggedin);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Background />
      <GoldCircle top={"-1000px"} />
      <ResponsiveMenuBarContainer>
        <MenuBar>
          {vm.isLoggedin ? (
            <MenuButtonContainerStyle>
              <MenuButtonStyle>로그아웃</MenuButtonStyle>
            </MenuButtonContainerStyle>
          ) : (
            <MenuButtonContainerStyle>
              <MenuButtonStyle>로그인</MenuButtonStyle>
              <MenuButtonStyle>회원가입</MenuButtonStyle>
            </MenuButtonContainerStyle>
          )}
        </MenuBar>
      </ResponsiveMenuBarContainer>

      <ResponsiveTitleContainer>
        <TitleTextStyle style={{ marginTop: "3%" }}>
          {"League of Legends®\nBanPick Contest"}
        </TitleTextStyle>
      </ResponsiveTitleContainer>

      <ResponsiveButtonContainer>
        <Button
          width={"300px"}
          height={"60px"}
          name={"click to start"}
          fontsize={"0.8em"}
        />
      </ResponsiveButtonContainer>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GridView>
          <ContextBoxContainer>
            <ContextBox
              width={"100%"}
              height={"100%"}
              children={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <BlurredBox height={"60px"} name={"Leaderboards"} />
                  <div
                    style={{
                      color: "#ffffff",
                      display: vm.LeaderBoardData === null ? "none" : "block",
                    }}
                  >
                    Leaderboard
                  </div>
                </div>
              }
            />
          </ContextBoxContainer>

          <ContextBoxContainer>
            <ContextBox
              width={"100%"}
              height={"100%"}
              children={
                <div
                  style={{
                    display: "flex",
                    height: "70%",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <BlurredBox height={"60px"} name={"My Best"} />
                  {vm.myScore === null ? (
                    <BlurredBox
                      height={"50%"}
                      name={"Log in or Sign up to Check."}
                    />
                  ) : (
                    <ScoreCircle
                      radius={"250px"}
                      score={vm.myScore}
                      grade={vm.myRanking + " / " + vm.totalRanking}
                    />
                  )}
                </div>
              }
            />
          </ContextBoxContainer>
        </GridView>
      </div>
    </div>
  );
});

export default HomeView;
