const btnEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit-profile');

const btnAddPhoto = document.querySelector('.profile__add');
const popupAddPhoto = document.querySelector('.popup_type_add-photo');

const userName = document.querySelector('.profile__name');
const aboutMe = document.querySelector('.profile__proff');

const formEdit = document.querySelector('.popup__form_edit_profile');
const nameInput = formEdit.querySelector('.popup__input_value_name');
const jobInput = formEdit.querySelector('.popup__input_value_job');

const popupShowImage = document.querySelector('.popup_type_show-image');
const imgPopup = document.querySelector('.popup__image')
const capturePopup = document.querySelector('.popup__text');

function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  modalClose(popupEdit);
};

formEdit.addEventListener('submit', handleFormSubmit);

function modalOpen(modal) {
  modal.classList.add('popup_opened');
};

btnEdit.addEventListener('click', () => {
  modalOpen(popupEdit);
  nameInput.value = userName.textContent;
  jobInput.value = aboutMe.textContent;
});
btnAddPhoto.addEventListener('click', () => modalOpen(popupAddPhoto));


const popupClose = document.querySelectorAll('.popup__close');
const popupCloseElement = Array.from(popupClose);

function modalClose(modal) {
  modal.classList.remove('popup_opened');
};

popupCloseElement[0].addEventListener('click', () => modalClose(popupEdit));
popupCloseElement[1].addEventListener('click', () => modalClose(popupAddPhoto));
popupCloseElement[2].addEventListener('click', () => modalClose(popupShowImage));
  
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const formAdd = document.querySelector('.popup__form_add_photo');
const placeInput = formAdd.querySelector('.popup__input_value_place');
const linkInput = formAdd.querySelector('.popup__input_value_link');

const newCard = document.querySelector('.elements__list');

function newCardHandle(evt) {
  evt.preventDefault();
  const nameCard = placeInput.value;
  const linkCard = linkInput.value;
  newCard.prepend(addCards(nameCard, linkCard));
  modalClose(popupAddPhoto);
  placeInput.value = '';
  linkInput.value = '';
};

formAdd.addEventListener('submit', newCardHandle);

function openImagePopup(name, link) {
  capturePopup.textContent = name;
  imgPopup.src = link;
  modalOpen(popupShowImage);
};

function addCards(name, link) {
  const cardTemplate = document.querySelector('#item-template').content;
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  
  cardElement.querySelector('.elements__title').textContent = name;
  cardElement.querySelector('.elements__image').src = link;
  cardElement.querySelector('.elements__image').addEventListener('click', () => {
    openImagePopup(name, link);
  });
  cardElement.querySelector('.elements__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like_active');
  });
  cardElement.querySelector('.elements__del').addEventListener('click', (evt) => {
    evt.target.closest('.elements__item').remove();
  });
    
  return cardElement;
};

initialCards.forEach(function ({name, link}) {
  newCard.append(addCards(name, link));
});