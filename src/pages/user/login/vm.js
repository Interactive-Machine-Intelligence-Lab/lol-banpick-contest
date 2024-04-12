import { LogInAPI } from "../../../apis/user/userAPIs";
import { makeAutoObservable } from "mobx";
import { routerStore } from "../../../store/route";
import { tokenStore } from "../../../store/Auth";
import { setRefreshToken } from "../../../storage/Cookie";

class LoginViewModel {
  id = "";
  password = "";
  loginStatus = "idle"; // 'idle', 'loading', 'success', 'error'
  errormsg = "";

  constructor() {
    makeAutoObservable(this);
  }

  determineSatisfaction = () => {
    //ID => 4자리 이상 12자리 이하의 영문, 숫자 혼합 가능
    //PW => 8자리 이상 16자리 이하의 영문, 숫자 혼합
    const idRegex = /^[a-zA-Z0-9]{4,12}$/;
    const pwRegex = /^[a-zA-Z0-9]{8,16}$/;

    let statusCode = null;
    // ID and PW are both satisfied 0
    // ID is not satisfied 1
    // PW is not satisfied 2
    // ID and PW are both not satisfied 3
    // PW has repeated characters 4

    if (!idRegex.test(this.id) && !pwRegex.test(this.password)) {
      statusCode = 3;
    } else if (idRegex.test(this.id) && !pwRegex.test(this.password)) {
      statusCode = 2;
    } else if (!idRegex.test(this.id) && pwRegex.test(this.password)) {
      statusCode = 1;
    } else {
      statusCode = 0;
    }

    return statusCode;
  };

  setId = (id) => {
    this.id = id.toLowerCase();
  };

  setPassword = (password) => {
    this.password = password;
  };

  fetchLogin = async () => {
    let context = {};
    context = {
      site_id: this.id,
      site_password: this.password,
    };

    try {
      const response = await LogInAPI(context);
      this.loginStatus = "success";
      return response;
    } catch (err) {
      this.loginStatus = "error";
      this.errormsg = err.response.data.msg;
      return err;
    }
  };

  handleLogin = async () => {
    const statusCode = this.determineSatisfaction();

    if (statusCode === 0) {
      this.loginStatus = "loading";
      const response = await this.fetchLogin();
      const responseStatus = response.status;

      if (parseInt(responseStatus / 100) === 2) {
        const responseData = response.data;
        tokenStore.setToken(responseData.access_token);
        setRefreshToken(responseData.refresh_token);
        routerStore.goToHome();
      } else {
        this.setId("");
        this.setPassword("");
      }
    } else {
      if (statusCode === 1) {
        this.errormsg = "ID가 조건에 맞지 않습니다.";
      } else if (statusCode === 2) {
        this.errormsg = "PW가 조건에 맞지 않습니다.";
      } else if (statusCode === 3) {
        this.errormsg = "ID와 PW가 조건에 맞지 않습니다.";
      } else {
        this.errormsg = "알 수 없는 오류가 발생했습니다.";
      }
    }
  };
}

export default LoginViewModel;
