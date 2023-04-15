const btnEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');

const userName = document.querySelector('.profile__name');
const aboutMe = document.querySelector('.profile__proff');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_name');
const jobInput = formElement.querySelector('.popup__input_job');

btnEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = aboutMe.textContent;
});

const popupClose = document.querySelector('.popup__close');

function closePopup () {
  popup.classList.remove('popup_opened');
};

popupClose.addEventListener('click', closePopup);
 
function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);

