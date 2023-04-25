const btnEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');

const userName = document.querySelector('.profile__name');
const aboutMe = document.querySelector('.profile__proff');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_value_name');
const jobInput = formElement.querySelector('.popup__input_value_job');

btnEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = aboutMe.textContent;
});

const popupClose = document.querySelector('.popup__close');

function removeClassPopupOpened () {
  popup.classList.remove('popup_opened');
};

popupClose.addEventListener('click', removeClassPopupOpened);
 
function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  removeClassPopupOpened();
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
  const cardElements = cardTemplate.querySelector('.elements__item').cloneNode(true);

  cardElements.querySelector('.elements__image').src = linkInitialCards;
  cardElements.querySelector('.elements__title').textContent = nameInitialCards;
    
  newCard.append(cardElements);
};

for (let i = 0; i < initialCards.length; i++) {
  addCards(nameInitialCards[i], linkInitialCards[i]);
};