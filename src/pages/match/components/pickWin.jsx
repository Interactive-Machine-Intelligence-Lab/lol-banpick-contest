import React from "react";
import styled from "styled-components";
import ContextBox from "../../../components/contextbox";

const ScoreStyle = styled.div`
  font-family: Beaufort;
  font-weight: 900;
  text-align: center;
  color: #ffffff;
  font-size: 1.8em;
  margin: 0 10%;

  white-space: pre-wrap;
`;

const ButtonStyle = styled.button`
  width: 25%;
  height: 60%;
  background: ${(props) =>
    props.team === "blue"
      ? "rgba(0, 26, 255, 0.15)"
      : "rgba(255, 26, 0, 0.15)"};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) inset;
  border-radius: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);

  color: white;
  font-size: 1.1em;
  font-family: Beaufort;
  font-weight: 900;
  word-wrap: break-word;
  text-align: center;
`;

const WinPick = ({ score, round, fetchFunction }) => {
  return (
    <ContextBox width={"30vw"} height={"8vh"} direction={"row"} zIndex={-1}>
      <ButtonStyle
        onClick={() => {
          fetchFunction("blue");
        }}
        team={"blue"}
      >
        Blue wins.
      </ButtonStyle>
      <ScoreStyle>{"Score\n" + score + " / " + round}</ScoreStyle>
      <ButtonStyle
        onClick={() => {
          fetchFunction("red");
        }}
        team={"red"}
      >
        Red wins.
      </ButtonStyle>
    </ContextBox>
  );
};

export default WinPick;
