import { makeAutoObservable } from "mobx";

class RouterStore {
  constructor() {
    makeAutoObservable(this);
  }

  navigate = null;

  setNavigator(navigatorFunc) {
    this.navigate = navigatorFunc;
  }

  goToHome = () => {
    if (this.navigate) {
      this.navigate("/");
    }
  };

  goToSignUp = () => {
    if (this.navigate) {
      this.navigate("/user/signup");
    }
  };

  goToSignIn = () => {
    if (this.navigate) {
      this.navigate("/user/signin");
    }
  };

  goToSignInReplaced = () => {
    if (this.navigate) {
      this.navigate("/user/signin", { replace: true });
    }
  };

  goToMatch = () => {
    if (this.navigate) {
      this.navigate("/match");
    }
  };

  goToResult = () => {
    if (this.navigate) {
      this.navigate("/result");
    }
  };
}

export const routerStore = new RouterStore();
