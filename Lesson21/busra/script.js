const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^[0-9]{3,4}$/;

const formElement = document.getElementById("checkoutForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const firstNameInput = document.getElementById("firstname");
const firstNameError = document.getElementById("firstnameError");
const lastNameInput = document.getElementById("lastname");
const lastNameError = document.getElementById("lastnameError");
const cardNumberInput = document.getElementById("cardnumber");
const cardNumberError = document.getElementById("cardnumberError");
const expDateInput = document.getElementById("expDate");
const expDateError = document.getElementById("expDateError");
const cvvInput = document.getElementById("cvv");
const cvvError = document.getElementById("cvvError");

let formCorrect = true;

emailInput.addEventListener("blur", validateEmail);
phoneInput.addEventListener("blur", validatePhone);
firstNameInput.addEventListener("blur", () =>
  validateName(firstNameInput, firstNameError),
);
lastNameInput.addEventListener("blur", () =>
  validateName(lastNameInput, lastNameError),
);
cardNumberInput.addEventListener("blur", validateCard);
expDateInput.addEventListener("blur", validateExpDate);
cvvInput.addEventListener("blur", validateCvv);

function validateEmail() {
  if (emailPattern.test(emailInput.value)) {
    emailError.innerText = "";
    inputElement.removeAttribute("aria-invalid");
  } else {
    emailError.innerText =
      "Please enter correct email address (e.g. john@gmail.com)";
    formCorrect = false;
    inputElement.setAttribute("aria-invalid", "true");
  }
}

function validatePhone() {
  if (phonePattern.test(phoneInput.value)) {
    phoneError.innerText = "";
    inputElement.removeAttribute("aria-invalid");
  } else {
    phoneError.innerText =
      "Please enter correct phone number (e.g. 530 345 66 66)";
    formCorrect = false;
    inputElement.setAttribute("aria-invalid", "true");
  }
}

function validateName(input, errorField) {
  if (input.value.length >= 50) {
    errorField.innerText = "This field should contain less than 50 characters.";
    formCorrect = false;
    inputElement.setAttribute("aria-invalid", "true");
  } else {
    if (onlyLettersPattern.test(input.value)) {
      errorField.innerText = "";
      inputElement.removeAttribute("aria-invalid");
    } else {
      errorField.innerText = "This field can only contain letters.";
      formCorrect = false;
      inputElement.setAttribute("aria-invalid", "true");
    }
  }
}

function validateCard() {
  if (cardPattern.test(cardNumberInput.value)) {
    cardNumberError.innerText = "";
    inputElement.removeAttribute("aria-invalid");
  } else {
    cardNumberError.innerText =
      "Please enter your 16-digit card number with spaces.";
    formCorrect = false;
    inputElement.setAttribute("aria-invalid", "true");
  }
}

function validateExpDate() {
  if (expDatePattern.test(expDateInput.value)) {
    expDateError.innerText = "";
    inputElement.removeAttribute("aria-invalid");
  } else {
    expDateError.innerText = "Please enter a valid expiration date.";
    formCorrect = false;
    inputElement.setAttribute("aria-invalid", "true");
  }
}

function validateCvv() {
  if (cvvPattern.test(cvvInput.value)) {
    cvvError.innerText = "";
    inputElement.removeAttribute("aria-invalid");
  } else {
    cvvError.innerText = "Please enter the 3 digit security code.";
    formCorrect = false;
    inputElement.setAttribute("aria-invalid", "true");
  }
}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  formCorrect = true;
  validateEmail();
  validatePhone();
  validateName(firstNameInput, firstNameError);
  validateName(lastNameInput, lastNameError);
  validateCard();
  validateExpDate();
  validateCvv();

  if (formCorrect) {
    document.getElementById("success").classList.remove("hidden");
    formElement.classList.add("hidden");
  }
});
