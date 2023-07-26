export default class UserInfo {
  constructor({name: selectorName, job: selectorProff}) {
    this._selectorName = selectorName;
    this._selectorProff = selectorProff;
    this._nameInput = document.querySelector('.popup__input_value_name');
    this._jobInput = document.querySelector('.popup__input_value_job');
  }

  getUserInfo() {
    this._nameInput.value = this._selectorName.textContent;
    this._jobInput.value = this._selectorProff.textContent;
  }

  setUserInfo() {
    this._selectorName.textContent = this._nameInput.value;
    this._selectorProff.textContent = this._jobInput.value;
  }
}