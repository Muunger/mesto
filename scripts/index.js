const btnEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');

const userName = document.querySelector('.profile__name');
const aboutMe = document.querySelector('.profile__proff');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_name');
const jobInput = formElement.querySelector('.popup__input_job');

btnEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.setAttribute('value', userName.textContent);
  jobInput.setAttribute('value', aboutMe.textContent);
});

const popupClose = document.querySelector('.popup__close');

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = aboutMe.textContent;
});

function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  aboutMe.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

