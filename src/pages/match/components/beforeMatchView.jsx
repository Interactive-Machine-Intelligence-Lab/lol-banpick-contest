import React from "react";
import styled from "styled-components";
import TitleLine from "../../../assets/images/TitleLine.png";
import Trophy from "../../../assets/images/trophy.png";

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamColorStyle = styled.div`
  width: 100%;
  height: 25px;

  font-family: Beaufort;
  font-style: normal;
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;

  color: #ffa2a2;
`;

const ChampionPositionStyle = styled.div`
  width: 100%;
  height: 100px;

  font-family: Beaufort;
  font-style: normal;
  font-size: 3.6em;
  text-align: center;

  margin-bottom: 1%;

  color: #ffffff;
`;

const PositionStyle = styled.span`
  font-weight: 700;
`;

const ChampionStyle = styled.span`
  font-weight: 300;
`;

const MostRateStyle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Beaufort;
  font-style: normal;
  font-size: 1.5em;
  text-align: center;

  color: #ffffff;
`;

const HeadingStyle = styled.span`
  font-weight: 700;
`;

const ValueStyle = styled.span`
  font-weight: 300;
`;

const TitleLineStyle = styled.img`
  width: 30%;
  position: absolute;
  transform: translateY(10vh);
`;

const Title = ({ team, position, champion, most, rate }) => {
  return (
    <FlexBox>
      <TitleLineStyle src={TitleLine} />
      <TeamColorStyle>{"Team " + team}</TeamColorStyle>
      <ChampionPositionStyle>
        <PositionStyle>{position}</PositionStyle>{" "}
        <ChampionStyle>{champion}</ChampionStyle>
      </ChampionPositionStyle>
      <MostRateStyle>
        <div>
          <HeadingStyle>{"Most: "}</HeadingStyle>{" "}
          <ValueStyle>{most}</ValueStyle>
        </div>
        <div>
          <HeadingStyle>{"Win rate: "}</HeadingStyle>{" "}
          <ValueStyle>{rate}</ValueStyle>
        </div>
      </MostRateStyle>
    </FlexBox>
  );
};

const ScrollableBox = styled.div`
  width: 60%;
  max-height: 60vh;

  display: flex;

  flex-direction: column;
  justify-content: center;

  overflow-y: scroll;
  z-index: 3;

  background-color: rgba(255, 255, 255, 0.1);
`;

const MatchTemplateCard = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 1%;

  background: linear-gradient(
    90deg,
    rgba(5, 0, 255, 0.05) 0%,
    rgba(0, 56, 255, 0.08) 11.5%,
    rgba(255, 69, 69, 0.08) 83.5%,
    rgba(255, 0, 0, 0.05) 100%
  );
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5),
    inset 0px -4px 8px rgba(0, 0, 0, 0.25),
    inset 0px 4px 8px rgba(255, 255, 255, 0.25);

  border-radius: 8px;
`;

const ChampionImage = styled.img`
  width: 75px;
  height: 75px;
  margin: 10px;
  box-shadow: ${(props) =>
    props.ifIsMe === true ? "0px 0px 10px 10px rgba(255, 255, 0, 1)" : "none"};
`;

const TrophyImage = styled.div`
  width: 125px;
  height: 100%;
  padding: 0px 10px;

  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.win === "blue" ? "flex-start" : "flex-end"};
  align-items: center;
`;

const BeforeMatchCard = ({ data }) => {
  return (
    <MatchTemplateCard>
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
      <TrophyImage win={"blue"}>
        <img src={Trophy} alt="Example" width={30} height={30} />
      </TrophyImage>
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
        ifIsMe={true}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${"Aatrox" + "_squared.jpg"}`}
      />
    </MatchTemplateCard>
  );
};

const BeforeMatchView = () => {
  return (
    <FlexBox>
      <Title
        team={"Red"}
        position={"Top"}
        champion={"Garen"}
        most={"Riven"}
        rate={"63.3%"}
      />
      <ScrollableBox>
        <BeforeMatchCard />
        <BeforeMatchCard />
        <BeforeMatchCard />
        <BeforeMatchCard />

        <BeforeMatchCard />
        <BeforeMatchCard />
        <BeforeMatchCard />
        <BeforeMatchCard />

        <BeforeMatchCard />
        <BeforeMatchCard />
        <BeforeMatchCard />
        <BeforeMatchCard />
      </ScrollableBox>
    </FlexBox>
  );
};

export default BeforeMatchView;
