import React from "react";
import styled from "styled-components";
import bgimage from "../assets/images/bgimage.png";

const BackgroundStyle = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  filter: blur(12px);
`;

const Background = () => {
  return (
    <BackgroundStyle
      style={{
        overflow: "hidden",
      }}
    >
      <BackgroundImage src={bgimage} />
    </BackgroundStyle>
  );
};

export default Background;
