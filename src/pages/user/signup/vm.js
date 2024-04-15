import { UserRegisterAPI } from "../../../apis/user/userAPIs";
import { tokenStore } from "../../../store/Auth";
import { setRefreshToken } from "../../../storage/Cookie";
import { makeAutoObservable } from "mobx";
import { routerStore } from "../../../store/route";

class SignUpViewModel {
  id = "";
  password = "";
  passwordConfirm = "";
  riotId = "";
  loginStatus = "idle"; // 'idle', 'loading', 'success', 'error'
  errormsg = "";

  constructor() {
    makeAutoObservable(this);
  }

  determineSatisfaction = () => {
    //ID => 4자리 이상 12자리 이하의 영문, 숫자 혼합 가능
    //PW => 8자리 이상 16자리 이하의 영문, 숫자 혼합
    //PW 확인 => PW와 같아야 함
    //라이엇 아이디 => 선택사항이며 # 기호가 무조건 포함되어 있어야 함
    const idRegex = /^[a-zA-Z0-9]{4,12}$/;
    const pwRegex = /^[a-zA-Z0-9]{8,16}$/;

    let statusCode = null;
    // ID and PW are both satisfied 0
    // ID is not satisfied 1
    // PW is not satisfied 2
    // ID and PW are both not satisfied 3
    // PW has repeated characters 4
    // PW and PW Confirm are not the same 5
    // Riot ID is not satisfied 6

    if (!idRegex.test(this.id) && !pwRegex.test(this.password)) {
      statusCode = 3;
    } else if (idRegex.test(this.id) && !pwRegex.test(this.password)) {
      statusCode = 2;
    } else if (!idRegex.test(this.id) && pwRegex.test(this.password)) {
      statusCode = 1;
    } else if (this.password !== this.passwordConfirm) {
      statusCode = 4;
    } else if (!this.riotId.includes("#") && this.riotId.length > 0) {
      statusCode = 5;
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

  setPasswordConfirm = (password) => {
    this.passwordConfirm = password;
  };

  setRiotId = (riotId) => {
    this.riotId = riotId;
  };

  fetchRegister = async () => {
    let context = {};
    if (this.riotId === "") {
      context = {
        name: this.id,
        site_id: this.id,
        site_password: this.password,
      };
    } else {
      context = {
        name: this.id,
        riot_id: this.riotId,
        site_id: this.id,
        site_password: this.password,
      };
    }

    try {
      const response = await UserRegisterAPI(context);
      this.loginStatus = "success";
      return response;
    } catch (err) {
      console.error(err);
      this.loginStatus = "error";
      this.errormsg = err.response.data.msg;
      return err;
    }
  };

  handleRegister = async () => {
    const statusCode = this.determineSatisfaction();

    if (statusCode === 0) {
      this.loginStatus = "loading";
      const response = await this.fetchRegister();
      const responseStatus = response.status;

      if (parseInt(responseStatus / 100) === 2) {
        const responseData = response.data;
        tokenStore.setToken(responseData.access_token);
        setRefreshToken(responseData.refresh_token);
        routerStore.goToHome();
      } else {
        this.setId("");
        this.setPassword("");
        this.setPasswordConfirm("");
        this.setRiotId("");
      }
    } else {
      this.loginStatus = "error";
      if (statusCode === 1) {
        this.errormsg = "ID가 조건에 맞지 않습니다.";
      } else if (statusCode === 2) {
        this.errormsg = "PW가 조건에 맞지 않습니다.";
      } else if (statusCode === 3) {
        this.errormsg = "ID와 PW가 조건에 맞지 않습니다.";
      } else if (statusCode === 4) {
        this.errormsg = "PW와 PW 확인이 일치하지 않습니다.";
      } else if (statusCode === 5) {
        this.errormsg = "라이엇 아이디가 조건에 맞지 않습니다.";
      } else {
        this.errormsg = "알 수 없는 오류가 발생했습니다.";
      }
    }
  };
}

export default SignUpViewModel;
