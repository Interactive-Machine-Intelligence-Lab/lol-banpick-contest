import axios from "axios";
import { makeAutoObservable } from "mobx";

class LoginViewModel {
  id = "";
  password = "";
  loginStatus = "idle"; // 'idle', 'loading', 'success', 'error'

  constructor() {
    makeAutoObservable(this);
  }

  determineSatisfaction = () => {
    //ID => 4자리 이상 12자리 이하의 영문, 숫자 혼합 가능
    //PW => 8자리 이상 16자리 이하의 영문, 숫자 혼합
    const idRegex = /^[a-zA-Z0-9]{4,12}$/;
    const pwRegex = /^[a-zA-Z0-9]{8,16}$/;

    //PW는 반복되는 문자열이 4번 이상 있으면 안됨
    //ID는 대소문자 구분하지 않음
    const repeatedRegex = /(\w)\1{3,}/;

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
    } else if (repeatedRegex.test(this.password)) {
      statusCode = 4;
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
      const res = await axios.post(
        "https://lol.dshs.site/api/auth/login",
        context
      );
      console.log(res);
      this.loginStatus = "success";
      return res.data;
    } catch (err) {
      console.error(err);
      this.loginStatus = "error";
      return err;
    }
  };

  handleLogin = async () => {
    const statusCode = this.determineSatisfaction();
    console.log(statusCode, this.id, this.password);
    if (statusCode === 0) {
      this.loginStatus = "loading";
      await this.fetchLogin();
    } else {
      if (statusCode === 1) {
        alert("ID is not satisfied");
      } else if (statusCode === 2) {
        alert("PW is not satisfied");
      } else if (statusCode === 3) {
        alert("ID and PW are both not satisfied");
      } else if (statusCode === 4) {
        alert("PW cannot have repeated characters more than 3 times");
      } else {
        alert("Unknown Error");
      }
    }
  };
}

export default LoginViewModel;
