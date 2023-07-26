import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector, cardData) {
    super(selector);
    this._cardData = cardData;
    this._imgPopup = document.querySelector('.popup__image');
    this._capturePopup = document.querySelector('.popup__text');
  }

  open(element) {
    super.open();
    this._capturePopup.textContent = element.name;
    this._imgPopup.src = element.link;
    this._imgPopup.alt = element.name;
  }
}