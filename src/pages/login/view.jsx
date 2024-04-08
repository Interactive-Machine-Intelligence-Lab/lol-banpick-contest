import React from "react";
import Background from "../../components/background";
import LoginForm from "./components/loginForm";

const LoginView = () => {
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
      <LoginForm isLogin={false} />
    </div>
  );
};
export default LoginView;
