const btnEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const btnAddPhoto = document.querySelector('.profile__add');
const popupAddPhoto = document.querySelector('.popup_type_add-photo');
const btnAvatar = document.querySelector('.profile__photo');
const popupAvatar = document.querySelector('.popup_type_update-avatar');

const configFormSelector = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_invalid',
  inputErrorClass: 'popup__input_type_error',
};

export { btnEdit, popupEdit, btnAddPhoto, popupAddPhoto, btnAvatar, popupAvatar, configFormSelector};