const btnEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const btnAddPhoto = document.querySelector('.profile__add');
const popupAddPhoto = document.querySelector('.popup_type_add-photo');
const userName = document.querySelector('.profile__name');
const aboutMe = document.querySelector('.profile__proff');
const formEdit = document.forms['edit-profile'];
const popupShowImage = document.querySelector('.popup_type_show-image');
const formAdd = document.forms['add-photo'];

const configFormSelector = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_invalid',
  inputErrorClass: 'popup__input_type_error',
};

export { btnEdit, popupEdit, btnAddPhoto, popupAddPhoto, userName, aboutMe, formEdit, popupShowImage, formAdd, configFormSelector};