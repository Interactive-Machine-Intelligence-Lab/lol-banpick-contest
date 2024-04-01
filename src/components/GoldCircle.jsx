import React from "react";
import assetimage from "../assets/images/goldcircle.png";
import styled from "styled-components";

const CircleContainer = styled.div`
  overflow: hidden;
  width: 1920px;
`;

const CircleStyle = styled.img`
  position: absolute;
  width: 1920px;
  top: ${(props) => props.top};
  align-self: center;
  object-fit: fill;
  z-index: -1;
  transform-origin: center center;
`;

const GoldCircle = (props) => {
  return (
    <CircleContainer>
      <CircleStyle src={assetimage} top={props.top} />
    </CircleContainer>
  );
};

export default GoldCircle;
