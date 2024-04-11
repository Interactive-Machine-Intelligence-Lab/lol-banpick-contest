import React from "react";
import styled, { keyframes } from "styled-components";

// 회전 애니메이션
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 로딩 컴포넌트 스타일
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 20, 20, 0.2); // 약간 투명한 배경
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 100;
  pointer-events: none; // 모든 클릭 및 스크롤 이벤트 차단
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3; // 로더의 배경색
  border-top: 5px solid #3498db; // 로더의 전경색
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading = ({ show }) => {
  return (
    <LoadingContainer show={show}>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default Loading;
