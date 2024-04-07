import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../../components/button";
import ContextBox from "../../../components/contextbox";
import { useSpring, animated } from "react-spring";

const StatusStyle = styled.div`
  margin: 5% 0;
  font-family: Beaufort;
  width: 100%;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  text-shadow: 0px 0px 13px rgba(255, 255, 255, 0.5);
  font-size: 5em;
  z-index: 3;
`;

const CurrentScoreContainer = styled.div`
  margin: 3% 0;
  font-family: Beaufort;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.03em;
  color: #ffffff;
  font-size: 2em;
  z-index: 3;
`;

const LeaderBoardsStyle = styled.div`
  height: 55%;
  z-index: 3;
`;

const MozaicStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const AnimatedMozaicStyle = animated(MozaicStyle);

const AnimatedContextBox = animated(ContextBox);

const SideMenuBar = ({ score, isOpen, handleOpen }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setSize({
          width: document.documentElement.scrollWidth,
          height: document.documentElement.scrollHeight,
        });
      };

      // 초기 사이즈 설정
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const fadeIn = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    config: { duration: 1000 },
    reset: true,
    reverse: isOpen,
    delay: 20,
  });

  const moveIn = useSpring({
    to: { transform: "translateX(-100%)" },
    from: { transform: "translateX(0%)" },
    config: { tension: 90, friction: 40 },
    reset: true,
    reverse: isOpen,
    delay: 20,
  });

  if (isOpen === false) {
    return null;
  }
  return (
    <div>
      <AnimatedMozaicStyle
        style={fadeIn}
        width={size.width}
        height={size.height}
        onClick={() => {
          handleOpen();
        }}
      />
      <AnimatedContextBox
        style={moveIn}
        width={"35%"}
        height={"100vh"}
        direction={"column"}
        position={"absolute"}
        zIndex={2}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backdropFilter: "blur(8px)",
            zIndex: 0,
          }}
        />
        <StatusStyle>{score + " / 50"}</StatusStyle>
        <CurrentScoreContainer>
          {"Current Score: " + score}
        </CurrentScoreContainer>
        <LeaderBoardsStyle></LeaderBoardsStyle>
        <Button name="Go Home" width="60%" height="6%" fontsize={"1.8em"} />
      </AnimatedContextBox>
    </div>
  );
};

export default SideMenuBar;
