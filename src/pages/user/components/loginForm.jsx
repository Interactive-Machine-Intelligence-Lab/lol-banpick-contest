import React from "react";
import styled from "styled-components";

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

const ButtonStyle = styled.button`
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

const ErrorMsgStyle = styled.div`
  display: ${(props) => (props.status === "error" ? "block" : "none")};
  font-family: Pretendard;
  font-size: 1.2em;
  font-weight: 600;
  width: 100%;
  height: 40px;
  text-align: center;
  color: rgba(255, 50, 50, 0.8);
`;

const LoginForm = ({ id, setId, pw, setPW, loginStatus, fetchF, errorMsg }) => {
  return (
    <FlexBox>
      <TitleStyle>Sign In</TitleStyle>
      <LoginFormContainer
        onSubmit={(e) => {
          e.preventDefault();
          fetchF();
        }}
      >
        <InstructionContainer>아이디</InstructionContainer>
        <InputContainer
          placeholder="아이디"
          id="id"
          type="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
        />
        <InstructionContainer>비밀번호</InstructionContainer>
        <InputContainer
          placeholder="비밀번호"
          id="pw"
          type="password"
          value={pw}
          onChange={(e) => {
            setPW(e.target.value);
          }}
          required
        />
        <ErrorMsgStyle status={loginStatus}>{errorMsg}</ErrorMsgStyle>
        <ButtonStyle
          type="submit"
          disabled={loginStatus === "loading"}
          width={"15vw"}
          height={"7vh"}
          fontsize={"2em"}
        >
          Submit
        </ButtonStyle>
      </LoginFormContainer>
    </FlexBox>
  );
};

const SignUpForm = ({
  id,
  setId,
  pw,
  setPW,
  pwcf,
  setPWcf,
  riotID,
  setRiotID,
  loginStatus,
  fetchF,
  errorMsg,
}) => {
  return (
    <FlexBox>
      <TitleStyle>Sign Up</TitleStyle>
      <LoginFormContainer
        onSubmit={(e) => {
          e.preventDefault();
          fetchF();
        }}
      >
        <InstructionContainer>아이디</InstructionContainer>
        <InputContainer
          placeholder="4자리 이상 12자리 이하의 영문, 숫자 혼합 가능"
          id="id"
          type="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
        />
        <InstructionContainer>비밀번호</InstructionContainer>
        <InputContainer
          placeholder="8자리 이상 16자리 이하의 영문, 숫자 혼합 가능"
          id="pw"
          type="password"
          value={pw}
          onChange={(e) => {
            setPW(e.target.value);
          }}
          required
        />
        <InstructionContainer>비밀번호 확인</InstructionContainer>
        <InputContainer
          placeholder="같은 비밀번호를 다시 입력해주세요."
          id="pwcf"
          type="password"
          value={pwcf}
          onChange={(e) => {
            setPWcf(e.target.value);
          }}
          required
        />
        <InstructionContainer>{"라이엇 아이디(선택)"}</InstructionContainer>
        <InputContainer
          placeholder="ex. Hide on Bush#KR1 (반드시 태그까지 입력)"
          id="riotid"
          type="id"
          value={riotID}
          onChange={(e) => {
            setRiotID(e.target.value);
          }}
        />
        <ErrorMsgStyle status={loginStatus}>{errorMsg}</ErrorMsgStyle>
        <ButtonStyle
          type="submit"
          disabled={loginStatus === "loading"}
          width={"15vw"}
          height={"7vh"}
          fontsize={"2em"}
        >
          Submit
        </ButtonStyle>
      </LoginFormContainer>
    </FlexBox>
  );
};

export { LoginForm, SignUpForm };
