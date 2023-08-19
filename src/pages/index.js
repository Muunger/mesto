import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import { 
  btnEdit,
  popupEdit,
  btnAddPhoto,
  popupAddPhoto,
  btnAvatar,
  popupAvatar,
  configFormSelector } from '../scripts/utils/constants.js';
import { api } from '../scripts/components/Api.js';

let userId = null;

const formValidationPopupAddPhoto = new FormValidator(configFormSelector, popupAddPhoto);
formValidationPopupAddPhoto.enableValidation();

const formValidationPopupEdit = new FormValidator(configFormSelector, popupEdit);
formValidationPopupEdit.enableValidation();

const formValidationPopupAvatar = new FormValidator(configFormSelector, popupAvatar);
formValidationPopupAvatar.enableValidation();

const userInfo = new UserInfo(
  {
    name: '.profile__name',
    about: '.profile__proff',
    avatar: '.profile__avatar'
  });

api.getUser()
  .then(res => {
    userId = res._id;
    userInfo.setUserInfo(res);
  })
  .catch(err => console.log(err));

const section = new Section(createCard, '.elements__list');

api.getInitialCards()
  .then(res => {
    section.renderItems(res)
  })
  .catch(err => console.log(err));

function createCard({ data, position = "prepend"}) {
  const card = new Card({ 
    data,
    handleCardClick,
    handleCardDelete,
    userId,
    handleLikeCard
  }, '#item-template').generateCard();
  section.addItem(card, position);
};

function handleLikeCard(instance) {
  api.changeLike(instance.getId(), instance.isLiked())
    .then((res) => {
      instance.setGroupLikes(res);
    })
    .catch(err => console.log(err));
};

const newClassPopupAddPhoto = new PopupWithForm({
  popupSelector: '.popup_type_add-photo',
  handleFormSubmit: (formData) => {
    api.addCard(formData)
      .then((res) => {
        createCard({data: res, position: "prepend"})
      })
      .catch(err => console.log(err));
    newClassPopupAddPhoto.close();
  }
});
newClassPopupAddPhoto.setEventListeners();

btnAddPhoto.addEventListener('click', () => {
  newClassPopupAddPhoto.open();
});

const newClassPopupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile', 
  handleFormSubmit: (formData) => {
    api.editProfile(formData)
      .then((res) => {
        userInfo.setUserInfo(res)
      })
      .catch(err => console.log(err));
    newClassPopupEdit.close();
  }
});
newClassPopupEdit.setEventListeners();

btnEdit.addEventListener('click', () => {
  newClassPopupEdit.open();
  newClassPopupEdit.setInputValues(userInfo.getUserInfo());
});

const popupWithImage = new PopupWithImage('.popup_type_show-image');
popupWithImage.setEventListeners();

function handleCardClick(cardData) {
  popupWithImage.open(cardData);
};

const newClassPopupAvatar = new PopupWithForm({
  popupSelector: '.popup_type_update-avatar',
  handleFormSubmit: (formData) => {
    api.editAvatar(formData)
      .then((res) => {
        userInfo.setUserInfo(res)
      })
      .catch(err => console.log(err));
    newClassPopupAvatar.close();
  }
});
newClassPopupAvatar.setEventListeners();

btnAvatar.addEventListener('click', () => {
  newClassPopupAvatar.open();
});

const popupConfirmation = new PopupWithConfirmation({
  popupSelector: '.popup_type_confirm'
});
popupConfirmation.setEventListeners();

function handleCardDelete(instance) {
  popupConfirmation.open();
  popupConfirmation.setConfirm(() => {
    api.removeCard(instance.getId())
    .then(() => {
      instance.remove();
      popupConfirmation.close();
    })
    .catch(err => console.log(err));
  });
};