import { makeAutoObservable } from "mobx";

export const TOKEN_TIME_OUT = 60 * 1000;

class TokenStore {
  authenticated = false;
  accessToken = null;
  expireTime = null;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(accessToken) {
    this.authenticated = true;
    this.accessToken = accessToken;
    this.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
  }

  deleteToken() {
    this.authenticated = false;
    this.accessToken = null;
    this.expireTime = null;
  }
}

export const tokenStore = new TokenStore();
