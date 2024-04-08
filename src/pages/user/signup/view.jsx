import React from "react";
import Background from "../../../components/background";
import { SignUpForm } from "../components/loginForm";

const SignUpView = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "130vh",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Background height={"130vh"} />
      <SignUpForm />
    </div>
  );
};

export default SignUpView;
