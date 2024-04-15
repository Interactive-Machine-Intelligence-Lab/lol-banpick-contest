import React from "react";
import styled from "styled-components";
import BlurredBox from "../../components/blurredbox";
import ContextBox from "../../components/contextbox";
import ScoreCircle from "../../components/scorecircle";
import Background from "../../components/background";
import Button from "../../components/button";
import { observer } from "mobx-react";

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  overflow-y: auto;
`;

const RowBox = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ColumnBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

const HeadingStyle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 3em;
  font-family: Beaufort;
  font-weight: 700;
  z-index: 3;
  color: #ffffff;
  margin-bottom: 15%;
`;

const RowButtonBox = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ResultView = observer(({ vm }) => {
  return (
    <div>
      <Background />
      <FlexBox>
        <ContextBox width="80vw" height="75vh" direction={"column"}>
          <div
            style={{
              padding: "2%",
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <BlurredBox
              name={vm.myCurrentRanking + "th / " + vm.totalRanking}
              width="35%"
              height="15%"
              fontsize={"3em"}
            />
            <RowBox>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  marginRight: "30%",
                }}
              >
                <BlurredBox
                  width="30%"
                  height="60%"
                  fontsize={"3em"}
                  fontweight={"700"}
                  position={"absolute"}
                />
                <ColumnBox>
                  <HeadingStyle>My Best</HeadingStyle>
                  <ScoreCircle
                    radius={"250px"}
                    score={vm.myBestScore}
                    grade={vm.myBestRanking + " / " + vm.totalRanking}
                  />
                </ColumnBox>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <BlurredBox
                  width="30%"
                  height="60%"
                  fontsize={"3em"}
                  fontweight={"700"}
                  position={"absolute"}
                />
                <ColumnBox>
                  <HeadingStyle>My Score</HeadingStyle>
                  <ScoreCircle
                    radius={"250px"}
                    score={vm.myCurrentScore}
                    grade={vm.myCurrentRanking + " / " + vm.totalRanking}
                  />
                </ColumnBox>
              </div>
            </RowBox>
          </div>
          <RowButtonBox>
            <Button
              width={"40%"}
              height={"30%"}
              name={"Retry"}
              fontsize={"2em"}
              onClick={vm.handleRetryClick}
            />
            <Button
              width={"40%"}
              height={"30%"}
              name={"Go Home"}
              fontsize={"2em"}
              onClick={vm.handleGoHomeClick}
            />
          </RowButtonBox>
        </ContextBox>
      </FlexBox>
    </div>
  );
});

export default ResultView;
