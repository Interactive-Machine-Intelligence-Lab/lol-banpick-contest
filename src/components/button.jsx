import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  font-family: Beaufort;
  font-weight: 900;
  font-size: 48px;
  text-align: center;
  background: linear-gradient(90deg, #785a28 0%, #c89b3c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  backdrop-filter: blur(32px);
`;

const Button = (props) => {
  return (
    <ButtonStyle width={props.width} height={props.height}>
      {props.name}
    </ButtonStyle>
  );
};

export default Button;
