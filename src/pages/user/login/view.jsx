import React from "react";
import Background from "../../../components/background";
import { LoginForm } from "../components/loginForm";
import { observer } from "mobx-react";

const LoginView = observer(({ vm }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Background height={"130vh"} />
      <LoginForm
        id={vm.id}
        setId={vm.setId}
        pw={vm.password}
        setPW={vm.setPassword}
        loginStatus={vm.loginStatus}
        fetchF={vm.handleLogin}
      />
    </div>
  );
});

export default LoginView;
