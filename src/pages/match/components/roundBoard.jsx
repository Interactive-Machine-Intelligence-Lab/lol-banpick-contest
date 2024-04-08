import React from "react";
import styled from "styled-components";
import ContextBox from "../../../components/contextbox";

const RoundStyle = styled.div`
  font-family: Beaufort;
  font-weight: 900;
  text-align: center;
  color: #ffffff;
  font-size: 2em;
`;

const RoundBoard = ({ round }) => {
  return (
    <ContextBox width={"15vw"} height={"5vh"} direction={"column"}>
      <RoundStyle>{round + " / 50"}</RoundStyle>
    </ContextBox>
  );
};

export default RoundBoard;
