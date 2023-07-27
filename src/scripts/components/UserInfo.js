export default class UserInfo {
  constructor({username: selectorName, job: selectorProff}) {
    this._name = document.querySelector(selectorName);
    this._proff = document.querySelector(selectorProff);
  }

  getUserInfo() {
    return {
      username: this._name.textContent,
      job: this._proff.textContent,
    };
  }

  setUserInfo(formData) {
    this._name.textContent = formData.username;
    this._proff.textContent = formData.job;
  }
}