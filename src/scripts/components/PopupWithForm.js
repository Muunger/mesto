import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({selector, handleFormSubmit}, form) {
    super(selector);
    this._form = form;
    this._inputsList = this._form.querySelectorAll('.popup__input');
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    this._value = {};
    this._inputsList.forEach((input) => {
      this._value[input.name] = input.value;
    });
    return this._value;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}