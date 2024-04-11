import React from "react";
import styled from "styled-components";

const BoardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position || "relative"};

  font-family: Beaufort;
  font-weight: ${(props) => props.fontweight || 100};
  font-size: 1.5em;
  text-align: center;
  align-self: center;
  color: #ffffff;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(16px);
`;

const LeaderBoardContext = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <BoardStyle width="100%" height="100%">
      <ol>
        {data.map((element, index) => {
          return (
            <li key={index} style={{ marginBottom: "3%" }}>
              {element.name}
            </li>
          );
        })}
      </ol>
    </BoardStyle>
  );
};

export default LeaderBoardContext;
