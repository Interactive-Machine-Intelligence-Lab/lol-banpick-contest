import React, { useEffect, useState } from "react";
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
  z-index: -5;

  ${media.sm`display: block; `};
  ${media.md`display: block; `};
  ${media.lg`display: block;`};
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: fill;
  transform: scale(1.1);
  filter: blur(12px);
`;

const Background = () => {
  const [divHeight, setDivHeight] = useState("auto");

  useEffect(() => {
    const updateHeight = () => {
      const totalHeight = document.body.scrollHeight;
      setDivHeight(`${totalHeight + 50}px`);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver((entries) => {
      updateHeight();
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <BackgroundStyle
      style={{
        overflow: "hidden",
        height: divHeight < "100vh" ? divHeight : "100vh",
      }}
    >
      <BackgroundImage src={bgimage} />
    </BackgroundStyle>
  );
};

export default Background;
