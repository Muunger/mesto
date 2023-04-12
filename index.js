let btnEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');

let userName = document.querySelector('.profile__name');
let aboutMe = document.querySelector('.profile__proff');

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');

btnEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.setAttribute('value', userName.textContent);
  jobInput.setAttribute('value', aboutMe.textContent);
});

let popupClose = document.querySelector('.popup__close');

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

