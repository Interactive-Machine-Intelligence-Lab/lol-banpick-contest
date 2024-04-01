import React from "react";
import styled from "styled-components";
import BGImage from "../../../assets/images/contextbg.png";
import Button from "../../../components/button";
import BorderImage from "../../../assets/images/textbg.png";

const SideMenuBarContainer = styled.div`
  width: 35%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BGImage});
  background-position: center;
  background-size: cover;
  z-index: 3;
  border: 3px solid transparent;
  padding: 0px;
  border-image: url(${BorderImage}) 3 round;
`;

const StatusStyle = styled.div`
  margin: 5% 0;
  font-family: Beaufort;
  width: 100%;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  text-shadow: 0px 0px 13px rgba(255, 255, 255, 0.5);
  font-size: 5em;
`;

const CurrentScoreContainer = styled.div`
  margin: 3% 0;
  font-family: Beaufort;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.03em;
  color: #ffffff;
  font-size: 2em;
`;

const LeaderBoardsStyle = styled.div`
  height: 55%;
`;

const SideMenuBar = ({ score }) => {
  return (
    <SideMenuBarContainer>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(8px)",
          zIndex: -1,
        }}
      />
      <StatusStyle>{score + " / 50"}</StatusStyle>
      <CurrentScoreContainer>{"Current Score: " + score}</CurrentScoreContainer>
      <LeaderBoardsStyle></LeaderBoardsStyle>
      <Button name="Go Home" width="60%" height="6%" fontsize={"1.8em"} />
    </SideMenuBarContainer>
  );
};

export default SideMenuBar;
