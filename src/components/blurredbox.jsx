import React from "react";
import styled from "styled-components";

const BlurredBoxStyle = styled.div`
  font-family: Beaufort;
  font-weight: 100;
  font-size: 48px;
  text-align: center;
  color: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  backdrop-filter: blur(32px);
`;

const BlurredBox = (props) => {
  return (
    <BlurredBoxStyle width={props.width} height={props.height}>
      {props.name}
    </BlurredBoxStyle>
  );
};

export default BlurredBox;
