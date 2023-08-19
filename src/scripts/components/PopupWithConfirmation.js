import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  setConfirm(remove) {
    this._remove = remove;
  }

  _submitConfirm() {
    if (this._remove) {
      this._remove()
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitConfirm();
    })
  }
}