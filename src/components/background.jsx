import React from "react";
import styled from "styled-components";
import bgimage from "../assets/images/bgimage.png";

const sizes = {
  sm: "400px",
  md: "760px",
  lg: "1150px",
  xl: "1440px",
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => `
      @media (min-width: ${sizes[label]}) {
      ${args}
      }
  `;
  return acc;
}, {});

const BackgroundStyle = styled.div`
  overflow: hidden;
  position: absolute;
  display: flex;
  height: ${(props) => props.height};
  width: 100%;
  z-index: -2;

  ${media.sm`display: block; height: ${(props) => props.height}`};
  ${media.md`display: block; height: ${(props) => props.height}`};
  ${media.lg`display: block; height: ${(props) => props.height}`};
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  transform: scale(1.1);
  filter: blur(12px);
`;

const Background = (props) => {
  console.log("height", props.height);
  return (
    <BackgroundStyle height={props.height}>
      <BackgroundImage src={bgimage} />
    </BackgroundStyle>
  );
};

export default Background;
