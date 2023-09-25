import { makeAutoObservable } from "mobx";

class SessionStore {
  sessionCode = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSessionCode(code) {
    this.sessionCode = code;
    localStorage.setItem("sessionCode", code);
  }

  getSessionCode() {
    return localStorage.getItem("sessionCode");
  }
}

export const sessionStore = new SessionStore();