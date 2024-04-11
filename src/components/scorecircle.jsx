import React from "react";
import styled from "styled-components";
import circleradius from "../assets/images/circleradius.png";
import textbg from "../assets/images/textbg.png";

const ScoreCircleStyle = styled.div`
  font-family: Beaufort;
  text-align: center;
  width: ${(props) => props.radius};
  height: ${(props) => props.radius};
  backdrop-filter: blur(6px);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScoreStyle = styled.div`
  width: 100%;
  font-size: 80px;
  font-weight: 800;
  background-image: url(${textbg});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  align-self: center;
  filter: contrast(150%) saturate(150%) brightness(95%);
  margin-bottom: 3%;
`;

const GradeStyle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  background-image: url(${textbg});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  align-self: center;
  filter: contrast(150%) saturate(150%) brightness(95%);
`;

const ScoreCircle = ({ radius, score, grade }) => {
  if (score === null || grade === null) {
    return null;
  }

  return (
    <ScoreCircleStyle radius={radius}>
      <img
        src={circleradius}
        alt="circleradius"
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          alignSelf: "center",
          objectFit: "fill",
          zIndex: "-1",
        }}
      />
      <ScoreStyle>{score}</ScoreStyle>
      <GradeStyle>{grade}</GradeStyle>
    </ScoreCircleStyle>
  );
};

export default ScoreCircle;
