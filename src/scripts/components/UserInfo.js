export default class UserInfo {
  constructor({name: selectorName, about: selectorProff, avatar: selectorAvatar}) {
    this._name = document.querySelector(selectorName);
    this._proff = document.querySelector(selectorProff);
    this._avatar = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._proff.textContent,
    };
  }

  setUserInfo(formData) {
    this._name.textContent = formData.name;
    this._proff.textContent = formData.about;
    this._avatar.src = formData.avatar;
  }
}