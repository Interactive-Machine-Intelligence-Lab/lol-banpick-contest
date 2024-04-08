import React from "react";
import styled from "styled-components";
import BorderImage from "../../../assets/images/contextbg.png";

const ChampionCardBox = styled.div`
  width: 10vw;
  height: 35vh;
  min-height: 350px;
  margin: 0.5%;
  display: flex;
  flex-direction: column;
  border: 3px solid transparent;
  padding: 0px;
  border-image: url(${BorderImage}) 3 round;
`;

const ChampionNameCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: column;
  background-image: url(${BorderImage});
  background-position: center;
  background-size: cover;
  align-self: flex-end;
`;

const ChampionNameStyle = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-family: Beaufort;
  font-weight: 900;
  color: #ffffff;
  margin: 3% 3% 3% 5%;
  font-size: 2em;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TeamNameStyle = styled.div`
  width: 100%;
  height: 100%;
  font-family: Beaufort;
  font-weight: 700;
  margin: 3% 3% 0 5%;
  font-size: 1.2em;
  background: ${(props) =>
    props.teamname === "Blue"
      ? "linear-gradient(109.61deg, #4945ff -40.07%, #ffffff 30%)"
      : "linear-gradient(109.61deg, #ff4549 -40.07%, #ffffff 30%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: pre-wrap;
`;

const ChampionCard = ({ championName, teamPosition, onClickF, index }) => {
  const teamName = teamPosition.includes("Blue") ? "Blue" : "Red";
  return (
    <ChampionCardBox
      onClick={() => {
        onClickF(index);
      }}
    >
      <img
        style={{ objectFit: "cover", objectPosition: "center top" }}
        src={`${process.env.PUBLIC_URL}/image/${championName + ".jpg"}`}
        alt={championName}
        height={"70%"}
      />
      <ChampionNameCardContainer>
        <TeamNameStyle teamname={teamName}>{teamPosition}</TeamNameStyle>
        <ChampionNameStyle>{championName}</ChampionNameStyle>
      </ChampionNameCardContainer>
    </ChampionCardBox>
  );
};

export default ChampionCard;
