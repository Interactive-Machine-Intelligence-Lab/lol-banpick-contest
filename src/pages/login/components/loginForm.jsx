import React from "react";
import styled from "styled-components";
import Button from "../../../components/button";

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const TitleStyle = styled.div`
  margin: 5% 0;
  font-family: Beaufort;
  width: 100%;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  text-shadow: 0px 0px 13px rgba(255, 255, 255, 0.5);
  font-size: 5em;
`;

const LoginFormContainer = styled.form`
  display: flex;
  font-family: Pretendard;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InstructionContainer = styled.div`
  font-weight: 600;
  text-align: left;
  color: #ffffff;
  font-size: 2em;
  margin-bottom: 40px;
`;

const InputContainer = styled.input`
  font-weight: 100;
  width: 30vw;
  font-size: 1.1em;
  height: 40px;
  color: #000000;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #565656;
  border-radius: 8px;

  margin-bottom: 90px;
`;

const LoginForm = ({ isLogin }) => {
  if (isLogin === true) {
    return (
      <FlexBox>
        <TitleStyle>Sign In</TitleStyle>
        <LoginFormContainer>
          <InstructionContainer>아이디</InstructionContainer>
          <InputContainer
            placeholder="4자리 이상 12자리 이하의 영문, 숫자 혼합 가능"
            required
          />
          <InstructionContainer>비밀번호</InstructionContainer>
          <InputContainer
            placeholder="8자리 이상 16자리 이하의 영문, 숫자 혼합"
            required
          />
        </LoginFormContainer>
        <Button
          name={"Login"}
          width={"15vw"}
          height={"7vh"}
          fontsize={"2em"}
        ></Button>
      </FlexBox>
    );
  } else {
    return (
      <FlexBox>
        <TitleStyle>Sign Up</TitleStyle>
        <LoginFormContainer>
          <InstructionContainer>아이디</InstructionContainer>
          <InputContainer
            placeholder="4자리 이상 12자리 이하의 영문, 숫자 혼합 가능"
            required
          />
          <InstructionContainer>비밀번호</InstructionContainer>
          <InputContainer
            placeholder="8자리 이상 16자리 이하의 영문, 숫자 혼합"
            required
          />
          <InstructionContainer>비밀번호 확인</InstructionContainer>
          <InputContainer
            placeholder="같은 비밀번호를 다시 입력해주세요."
            required
          />
          <InstructionContainer>{"라이엇 아이디(선택)"}</InstructionContainer>
          <InputContainer placeholder="ex. Hide on Bush#KR1 (반드시 태그까지 입력)" />
        </LoginFormContainer>
        <Button
          name={"Submit"}
          width={"15vw"}
          height={"7vh"}
          fontsize={"2em"}
        ></Button>
      </FlexBox>
    );
  }
};

export default LoginForm;
