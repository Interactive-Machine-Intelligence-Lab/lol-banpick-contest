import React from "react";
import Background from "../../../components/background";
import { observer } from "mobx-react";
import { SignUpForm } from "../components/loginForm";

const SignUpView = observer(({ vm }) => {
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
      <SignUpForm
        id={vm.id}
        setId={vm.setId}
        pw={vm.password}
        setPW={vm.setPassword}
        pwcf={vm.passwordConfirm}
        setPWcf={vm.setPasswordConfirm}
        riotID={vm.riotId}
        setRiotID={vm.setRiotId}
        loginStatus={vm.loginStatus}
        fetchF={vm.handleLogin}
      />
    </div>
  );
});

export default SignUpView;
