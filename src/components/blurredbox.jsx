import React from "react";
import styled from "styled-components";

const BlurredBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position || "relative"};

  font-family: Beaufort;
  font-weight: ${(props) => props.fontweight || 100};
  font-size: ${(props) => props.fontsize || "2em"};
  text-align: center;
  align-self: center;
  color: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  backdrop-filter: blur(32px);
`;

const BlurredBox = (props) => {
  return (
    <BlurredBoxStyle
      width={props.width}
      height={props.height}
      fontsize={props.fontsize}
      fontweight={props.fontweight}
      position={props.position}
    >
      {props.name}
    </BlurredBoxStyle>
  );
};

export default BlurredBox;
