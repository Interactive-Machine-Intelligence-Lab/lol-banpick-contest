import React from "react";
import styled from "styled-components";
import assetimage from "../../../assets/images/goldcircle.png";
import TitleLine from "../../../assets/images/TitleLine.png";
import Trophy from "../../../assets/images/trophy.png";

const FlexBox = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const TeamColorStyle = styled.div`
  width: 100%;
  height: 25px;
  z-index: 3;

  font-family: Beaufort;
  font-style: normal;
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;

  color: #ffa2a2;
`;

const ChampionPositionStyle = styled.div`
  width: 150%;
  height: 100px;
  z-index: 3;

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
  z-index: 3;
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
  transform: scale(1.3);
  z-index: -1;
  min-width: 500px;
`;

const Title = ({ team, position, champion, most, rate, onClickF }) => {
  return (
    <div
      style={{
        zIndex: 3,
        top: 0,
        marginBottom: "10%",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClickF}
    >
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
    </div>
  );
};

const ScrollableBox = styled.div`
  width: auto;
  height: 60vh;
  max-height: 580px;

  display: flex;

  flex-direction: column;
  justify-content: center;

  overflow-x: auto;
  overflow-y: scroll;
  z-index: 3;

  background-color: rgba(255, 255, 255, 0.1);

  &::-webkit-scrollbar {
    width: 10px;
    height: 20%;
  }

  &::-webkit-scrollbar-thumb {
    background: #c89b3c;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;

const MatchTemplateCard = styled.div`
  width: 100%;
  height: 100px;
  z-index: 3;

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
        src={`${process.env.PUBLIC_URL}/image/${
          data.blue_team.top.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[0]}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.blue_team.jungle.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[1]}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.blue_team.mid.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[2]}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.blue_team.adc.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[3]}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.blue_team.support.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[4]}
      />
      <TrophyImage win={data.winTeam === 0 ? "blue" : "red"}>
        <img src={Trophy} alt="Example" width={30} height={30} />
      </TrophyImage>
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.red_team.top.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[5]}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.red_team.jungle.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[6]}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.red_team.mid.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[7]}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.red_team.adc.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[8]}
      />
      <ChampionImage
        src={`${process.env.PUBLIC_URL}/image/${
          data.red_team.support.display_name + "_squared.jpg"
        }`}
        ifIsMe={data.myPosition[9]}
      />
    </MatchTemplateCard>
  );
};

const BeforeMatchView = ({ data, handleClose }) => {
  if (data === null) {
    return null;
  } else {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
          <img
            src={assetimage}
            alt="GoldCircle"
            style={{ width: "100%", minWidth: 1400 }}
          />
        </div>

        <FlexBox>
          <Title
            team={data.currentTeam}
            position={data.currentPosition}
            champion={data.currentChampion}
            most={data.Most}
            rate={(data.WinRate * 100).toFixed(0) + "%"}
            onClickF={handleClose}
          />
          <ScrollableBox>
            <div
              style={{
                height: "100%",
                minWidth: 800,
                maxWidth: 1200,
              }}
            >
              {data.History.map((element) => (
                <BeforeMatchCard data={element} />
              ))}
            </div>
          </ScrollableBox>
        </FlexBox>
      </div>
    );
  }
};

export default BeforeMatchView;
