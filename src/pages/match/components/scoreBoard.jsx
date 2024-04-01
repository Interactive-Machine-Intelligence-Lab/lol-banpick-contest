import React from "react";
import styled from "styled-components";
import ContextBox from "../../../components/contextbox";

const ScoreStyle = styled.div`
  font-family: Beaufort;
  font-weight: 900;
  text-align: center;
  color: #ffffff;
  font-size: 2em;
`;

const ScoreBoard = ({ score }) => {
  return (
    <ContextBox width={"15vw"} height={"8vh"} direction={"column"}>
      <ScoreStyle>{score + " / 50"}</ScoreStyle>
    </ContextBox>
  );
};

export default ScoreBoard;
