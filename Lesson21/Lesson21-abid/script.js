const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3,4}$/;


const formElement = document.getElementById('checkoutForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const firstNameInput = document.getElementById('firstname');
const firstNameError = document.getElementById('firstnameError');
const lastNameInput = document.getElementById('lastname');
const lastNameError = document.getElementById('lastnameError');
const cardInput = document.getElementById('cardnumber');
const cardError = document.getElementById('cardError');
const expInput = document.getElementById('expDate');
const expError = document.getElementById('expError');
const cvvInput = document.getElementById('cvv');
const cvvError = document.getElementById('cvvError');

let formCorrect = true;

emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
firstNameInput.addEventListener('blur', () =>
  validateName(firstNameInput, firstNameError),
);
lastNameInput.addEventListener('blur', () =>
  validateName(lastNameInput, lastNameError),
);
cardInput.addEventListener('blur', validateCard);
expInput.addEventListener('blur', validateExp);
cvvInput.addEventListener('blur', validateCVV);

function validateEmail() {
  if (emailPattern.test(emailInput.value)) {
    emailError.innerText = '';
  } else {
    emailError.innerText =
      'Please enter correct email address (e.g. john@gmail.com)';
    formCorrect = false;
  }
}

function validatePhone() {
  if (phonePattern.test(phoneInput.value)) {
    phoneError.innerText = '';
  } else {
    phoneError.innerText =
      'Please enter correct phone number (e.g. 530 345 66 66)';
    formCorrect = false;
  }
}

function validateName(input, errorField) {
  if (input.value.length >= 50) {
    errorField.innerText = 'This field should contain less than 50 characters.';
    formCorrect = false;
  } else {
    if (onlyLettersPattern.test(input.value)) {
      errorField.innerText = '';
    } else {
      errorField.innerText = 'This field can only contain letters.';
      formCorrect = false;
    }
  }
}

function validateCard() {
  if (cardPattern.test(cardInput.value)) {
    cardError.innerText = '';
  } else {
    cardError.innerText = 'Format must be XXXX XXXX XXXX XXXX';
    formCorrect = false;
  }
}

function validateExp() {
  if (expDatePattern.test(expInput.value)) {
    expError.innerText = '';
  } else {
    expError.innerText = 'Format must be MM/YY (e.g., 12/26)';
    formCorrect = false;
  }
}

function validateCVV() {
  if (cvvPattern.test(cvvInput.value)) {
    cvvError.innerText = '';
  } else {
    cvvError.innerText = 'Enter a valid 3 or 4 digit CVV';
    formCorrect = false;
  }
}

formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  formCorrect = true;
  validateEmail();
  validatePhone();
  validateName(firstNameInput, firstNameError);
  validateName(lastNameInput, lastNameError);
  validateCard();
  validateExp();
  validateCVV();

  if (formCorrect) {
    document.getElementById('success').classList.remove('hidden');
    formElement.classList.add('hidden');
  }
});
