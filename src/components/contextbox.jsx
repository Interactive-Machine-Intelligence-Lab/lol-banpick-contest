import React from "react";
import contentbg from "../assets/images/contextbg.png";
import textbg from "../assets/images/textbg.png";
import styled from "styled-components";

const ContextBoxStyle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: fill;
  background-image: url(${contentbg});
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid transparent;
  border-image: url(${textbg}) 50 stretch;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContextBox = (props) => {
  return (
    <ContextBoxStyle width={props.width} height={props.height}>
      {props.children}
    </ContextBoxStyle>
  );
};

export default ContextBox;
