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

