import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Beaufort;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(90deg, #785a28 0%, #c89b3c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  backdrop-filter: blur(32px);

  font-size: ${(props) => props.fontsize};
`;

const Button = (props) => {
  return (
    <ButtonStyle
      width={props.width}
      height={props.height}
      fontsize={props.fontsize}
      onClick={props.onClick}
    >
      {props.name}
    </ButtonStyle>
  );
};

export default Button;
