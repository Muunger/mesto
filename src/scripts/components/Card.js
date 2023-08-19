export default class Card {
  constructor({ data, handleCardClick, handleCardDelete, userId, handleLikeCard }, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._userId = userId;
    this._handleLikeCard = handleLikeCard
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);

    return cardElement;
  }

  isLiked() {
    return this._data.likes.some((item) => {
      return item._id === this._userId;
    })
  }

  _updateLike() {
    this._cardLikeCounter.textContent = this._data.likes.length;
    if (this.isLiked()) {
      this._cardLikeButton.classList.add('elements__like_active')
    } else {
      this._cardLikeButton.classList.remove('elements__like_active')
    }
  }

  setGroupLikes(data) {
    this._data.likes = data.likes;
    this._updateLike();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__image');
    this._cardDeleteButton = this._element.querySelector('.elements__del');
    this._cardLikeButton = this._element.querySelector('.elements__like');
    this._cardLikeCounter = this._element.querySelector('.elements__like-number');
    this._updateLike();
    this._setEventListener();
    this._showDeleteButton();
    
    this._element.querySelector('.elements__title').textContent = this._data.name;
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    
    return this._element;
  }

  _setEventListener() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._data);
    });
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeCard(this);
    });
    this._cardDeleteButton.addEventListener('click', () => {
      this._handleCardDelete(this);
    });
  }

  _showDeleteButton() {
    if (this._userId !== this._data.owner._id) {
      this._cardDeleteButton.style.display = "none"
    }
  }

  remove() {
    this._element.remove();
    this._element = null;
  }

  getId() {
    return this._data._id;
  }
}