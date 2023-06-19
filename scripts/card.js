export default class Card {
  constructor(cardData, templateSelector, openImagePopup) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    this._element.querySelector('.elements__title').textContent = this._name;
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;

    return this._element;
  }

  _setEventListener() {
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._openImagePopup(this._cardData);
    });
    this._element.querySelector('.elements__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like_active');
    });
    this._element.querySelector('.elements__del').addEventListener('click', (evt) => {
      evt.target.closest('.elements__item').remove();
    });
  }
}