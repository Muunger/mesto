import './index.css';
import { initialCards } from '../scripts/utils/cards.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import { 
  btnEdit,
  popupEdit,
  btnAddPhoto,
  popupAddPhoto,
  configFormSelector} from '../scripts/utils/constants.js';

const formValidationPopupAddPhoto = new FormValidator(configFormSelector, popupAddPhoto);
formValidationPopupAddPhoto.enableValidation();

const formValidationPopupEdit = new FormValidator(configFormSelector, popupEdit);
formValidationPopupEdit.enableValidation();

function createCard(item) {
  const card = new Card(item, '#item-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item));
  }
}, '.elements__list');
section.renderItems();

const newClassPopupAddPhoto = new PopupWithForm({
  popupSelector: '.popup_type_add-photo',
  handleFormSubmit: (formData) => {
    section.prependAddItem(createCard(formData));
    newClassPopupAddPhoto.close();
  }
});
newClassPopupAddPhoto.setEventListeners();

btnAddPhoto.addEventListener('click', () => {
  newClassPopupAddPhoto.open();
});

const userInfo = new UserInfo({username: '.profile__name', job: '.profile__proff'});

const newClassPopupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile', 
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    newClassPopupEdit.close();
  }
});
newClassPopupEdit.setEventListeners();

btnEdit.addEventListener('click', () => {
  newClassPopupEdit.open();
  newClassPopupEdit.setInputValues(userInfo.getUserInfo());
});

function handleCardClick(cardData) {
  const popupWithImage = new PopupWithImage('.popup_type_show-image');
  popupWithImage.open(cardData);
};