import React from "react";
import assetimage from "../assets/images/goldcircle.png";
import styled from "styled-components";

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
`;

const CircleStyle = styled.img`
  overflow: hidden;
  position: absolute;
  width: 100%;
  min-width: 1400px;
  object-fit: fill;
  z-index: -1;
  transform: translateY(-50%);
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
