import React from "react";
import styled from "styled-components";
import BorderImage from "../../../assets/images/textbg.png";
import BGImage from "../../../assets/images/contextbg.png";

const ScoreStyle = styled.div`
  font-family: Beaufort;
  font-weight: 900;
  text-align: center;
`;

const ScoreBoardContainer = styled.div`
  width: 15vw;
  height: 8vh;
  margin: 0.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid transparent;
  padding: 0px;
  border-image: url(${BorderImage}) 3 round;
  background-image: url(${BGImage});
  background-position: center;
  background-size: cover;
  color: #ffffff;
  font-size: 2em;
`;

const ScoreBoard = ({ score }) => {
  return (
    <ScoreBoardContainer>
      <ScoreStyle>{score + " / 50"}</ScoreStyle>
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;
