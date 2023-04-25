const btnEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popup-edit-profile');

const btnAddPhoto = document.querySelector('.profile__add');
const popupAddPhoto = document.querySelector('#popup-add-photo');


const userName = document.querySelector('.profile__name');
const aboutMe = document.querySelector('.profile__proff');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_value_name');
const jobInput = formElement.querySelector('.popup__input_value_job');

btnEdit.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = aboutMe.textContent;
});

btnAddPhoto.addEventListener('click', function () {
  popupAddPhoto.classList.add('popup_opened');
});

const popupAddPhotoClose = document.querySelector('.popup__close_add_photo');
popupAddPhotoClose.addEventListener('click', function () {
  popupAddPhoto.classList.remove('popup_opened');
})

const popupEditClose = document.querySelector('.popup__close_edit_profile');
function removeClassPopupOpenedEditProfile () {
  popupEdit.classList.remove('popup_opened');
};
popupEditClose.addEventListener('click', removeClassPopupOpenedEditProfile);
 
function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  removeClassPopupOpenedEditProfile();
};
formElement.addEventListener('submit', handleFormSubmit);

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

const newCard = document.querySelector('.elements__list');

const nameInitialCards = initialCards.map(function(el) {
  return el.name;
});

const linkInitialCards = initialCards.map(function(el) {
  return el.link;
});

function addCards(nameInitialCards, linkInitialCards) {
  const cardTemplate = document.querySelector('#item-template').content;
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);

  cardElement.querySelector('.elements__image').src = linkInitialCards;
  cardElement.querySelector('.elements__title').textContent = nameInitialCards;
  cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  })
    
  newCard.append(cardElement);
};

for (let i = 0; i < initialCards.length; i++) {
  addCards(nameInitialCards[i], linkInitialCards[i]);
};