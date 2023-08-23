import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = this._form.querySelectorAll('.popup__input');
    this._popupBtn = this._form.querySelector('.popup__btn');
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

  setInputValues(data) {
    this._inputsList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  getButtonStartText(text) {
    return this._popupBtn.textContent = text;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._popupBtn.textContent = 'Сохранение...';
    });
  }
}