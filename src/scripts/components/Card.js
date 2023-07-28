export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__image');
    this._setEventListener();
    this._element.querySelector('.elements__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }

  _setEventListener() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._cardData);
    });
    this._element.querySelector('.elements__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like_active');
    });
    this._element.querySelector('.elements__del').addEventListener('click', () => {
      this._element.remove();
    });
  }
}