import React from "react";
import Background from "../../../components/background";
import Loading from "../../../components/loading";
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
      <Loading show={vm.loginStatus === "loading" ? true : false} />
      <Background height={"130vh"} />
      <LoginForm
        id={vm.id}
        setId={vm.setId}
        pw={vm.password}
        setPW={vm.setPassword}
        loginStatus={vm.loginStatus}
        fetchF={vm.handleLogin}
        errorMsg={vm.errormsg}
      />
    </div>
  );
});

export default LoginView;
