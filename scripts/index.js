import Card from './card.js';
import FormValidator from './FormValidator.js';

const btnEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const btnAddPhoto = document.querySelector('.profile__add');
const popupAddPhoto = document.querySelector('.popup_type_add-photo');
const userName = document.querySelector('.profile__name');
const aboutMe = document.querySelector('.profile__proff');
const formEdit = document.forms['edit-profile'];
const nameInput = formEdit.elements.username;
const jobInput = formEdit.elements.job;
const popupShowImage = document.querySelector('.popup_type_show-image');
const imgPopup = document.querySelector('.popup__image');
const capturePopup = document.querySelector('.popup__text');
const formAdd = document.forms['add-photo'];
const placeInput = formAdd.elements.place;
const linkInput = formAdd.elements.link;
const newCard = document.querySelector('.elements__list');
const popups = document.querySelectorAll('.popup');

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closeModal(popupActive);
  }
};

function handleEditProfileSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  closeModal(popupEdit);
};

function openModal(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

function closeModal(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const card = { name: placeInput.value, link: linkInput.value };
  const renderCard = new Card(card, '#item-template', openImagePopup);
  const renderCardElement = renderCard.generateCard();
  newCard.prepend(renderCardElement);
  closeModal(popupAddPhoto);
  formAdd.reset();
};

function openImagePopup(cardData) {
  capturePopup.textContent = cardData.name;
  imgPopup.src = cardData.link;
  imgPopup.alt = cardData.name;
  openModal(popupShowImage);
};

initialCards.forEach((item) => {
  const card = new Card(item, '#item-template', openImagePopup);
  const cardElement = card.generateCard();
  newCard.append(cardElement);
})

popups.forEach( (popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closeModal(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closeModal(popup);
    }
  });
});

formEdit.addEventListener('submit', handleEditProfileSubmit);

btnEdit.addEventListener('click', () => {
  openModal(popupEdit);
  nameInput.value = userName.textContent;
  jobInput.value = aboutMe.textContent;
});

btnAddPhoto.addEventListener('click', () => openModal(popupAddPhoto));

formAdd.addEventListener('submit', handleNewCardSubmit);