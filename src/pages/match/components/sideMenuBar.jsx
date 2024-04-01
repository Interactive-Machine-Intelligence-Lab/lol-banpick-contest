import React from "react";
import styled from "styled-components";
import Button from "../../../components/button";
import ContextBox from "../../../components/contextbox";

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
  z-index: 1;
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
  z-index: 1;
`;

const LeaderBoardsStyle = styled.div`
  height: 55%;
  z-index: 1;
`;

const SideMenuBar = ({ score }) => {
  return (
    <ContextBox
      width={"35%"}
      height={"100vh"}
      direction={"column"}
      position={"absolute"}
      zIndex={1}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(8px)",
          zIndex: 0,
        }}
      />
      <StatusStyle>{score + " / 50"}</StatusStyle>
      <CurrentScoreContainer>{"Current Score: " + score}</CurrentScoreContainer>
      <LeaderBoardsStyle></LeaderBoardsStyle>
      <Button name="Go Home" width="60%" height="6%" fontsize={"1.8em"} />
    </ContextBox>
  );
};

export default SideMenuBar;
