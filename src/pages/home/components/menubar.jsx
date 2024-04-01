import React from "react";
import styled from "styled-components";

const MenuBarStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 70vw;
  height: 41px;

  backdrop-filter: blur(9px);
  border-radius: 8px;

  border-top: 2px solid #785a28;
  border-bottom: 2px solid #785a28;

  font-weight: regular;
  font-style: normal;

  color: #ffffff;

  text-align: center;

  margin-top: 1.5%;
`;

const MenuBar = (props) => {
  return <MenuBarStyle>{props.children}</MenuBarStyle>;
};

export default MenuBar;
