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
const imgPopup = document.querySelector('.popup__image');
const capturePopup = document.querySelector('.popup__text');
const formAdd = document.querySelector('.popup__form_add_photo');
const placeInput = formAdd.querySelector('.popup__input_value_place');
const linkInput = formAdd.querySelector('.popup__input_value_link');
const newCard = document.querySelector('.elements__list');

function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  closeModal(popupEdit);
};

function openModal(modal) {
  modal.classList.add('popup_opened');
};

function closeModal(modal) {
  modal.classList.remove('popup_opened');
};

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const card = { name: placeInput.value, link: linkInput.value };
  newCard.prepend(createCards(card));
  closeModal(popupAddPhoto);
  formAdd.reset();
};

function openImagePopup(cardData) {
  capturePopup.textContent = cardData.name;
  imgPopup.src = cardData.link;
  imgPopup.alt = cardData.name;
  openModal(popupShowImage);
};

function createCards(cardData) {
  const cardTemplate = document.querySelector('#item-template').content;
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  
  cardElement.querySelector('.elements__title').textContent = cardData.name;
  const templateElementImage = cardElement.querySelector('.elements__image');
  templateElementImage.src = cardData.link;
  templateElementImage.alt = cardData.name;
  templateElementImage.addEventListener('click', () => {
    openImagePopup(cardData);
  });
  cardElement.querySelector('.elements__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like_active');
  });
  cardElement.querySelector('.elements__del').addEventListener('click', (evt) => {
    evt.target.closest('.elements__item').remove();
  });
    
  return cardElement;
};

initialCards.forEach( (cardData) => {
  newCard.append(createCards(cardData));
});

document.querySelectorAll('.popup').forEach( (popupItem) => {
  const childPopup = popupItem.closest('.popup');
  popupItem.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal(childPopup);
    }
  });
});

document.querySelectorAll('.popup__close').forEach( button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closeModal(buttonsPopup));
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closeModal(popupActive);
  }
});

formEdit.addEventListener('submit', handleFormSubmit);

btnEdit.addEventListener('click', () => {
  openModal(popupEdit);
  nameInput.value = userName.textContent;
  jobInput.value = aboutMe.textContent;
});

btnAddPhoto.addEventListener('click', () => openModal(popupAddPhoto));

formAdd.addEventListener('submit', handleNewCardSubmit);