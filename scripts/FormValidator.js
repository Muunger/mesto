export default class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = form;
  }

  _showError(inputElement, errorElement, config) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideError(inputElement, errorElement, config) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _disabledButton(buttonElement, config) {
    buttonElement.disabled = true;
    buttonElement.classList.add(this._inactiveButtonClass);
  }

  _enableButton(buttonElement, config) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(this._inactiveButtonClass);
  }

  _toggleButtonState(buttonElement, isActive, config) {
    if (!isActive) {
      this._disabledButton(buttonElement, config);
    } else {
      this._enableButton(buttonElement, config);
    }
  }

  _checkInputValidity(inputElement, formElement, config) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

    if (!isInputValid) {
      this._showError(inputElement, errorElement, config);
    } else {
      this._hideError(inputElement, errorElement, config);
    }
  }

  _setEventListener(formElement, config) {
    const inputsList = formElement.querySelectorAll(this._inputSelector);
    const submitButtonElement = formElement.querySelector(this._submitButtonSelector);

    formElement.addEventListener('reset', () => {
      this._disabledButton(submitButtonElement, config);
    });

    this._toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

    [...inputsList].forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        this._toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
        this._checkInputValidity(inputItem, formElement, config);
      });
    });
  }

  enableValidation(config) {
    const forms = document.querySelectorAll(this._formSelector);
    [...forms].forEach((formItem) => {
      this._setEventListener(formItem, config);
    });
  }
};