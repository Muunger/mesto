import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgPopup = this._popup.querySelector('.popup__image');
    this._capturePopup = this._popup.querySelector('.popup__text');
  }

  open(element) {
    super.open();
    this._capturePopup.textContent = element.name;
    this._imgPopup.src = element.link;
    this._imgPopup.alt = element.name;
    super.setEventListeners();
  }
}