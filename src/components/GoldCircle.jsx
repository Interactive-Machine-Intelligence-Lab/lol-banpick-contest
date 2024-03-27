import React from "react";
import assetimage from "../assets/images/goldcircle.png";
import styled from "styled-components";

const CircleStyle = styled.img`
  position: absolute;
  width: 100%;
  top: ${(props) => props.top};
  align-self: center;
  object-fit: fill;
`;

const GoldCircle = (props) => {
  return <CircleStyle src={assetimage} top={props.top} />;
};

export default GoldCircle;
