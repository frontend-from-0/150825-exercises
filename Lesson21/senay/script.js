// Regex Expressions
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const cardPattern = /^\d{16}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3}$/;

// Defining variables

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

const submitBtn = document.getElementById("btnSubmit");
const goBackBtn = document.getElementById("backButton");
const successMessage = document.getElementById("success");

//---Form Correction---

let formCorrect = true;

// - Add Event Listeners to Input Fields
emailInput.addEventListener("blur", validateEmail);
phoneInput.addEventListener("blur", validatePhone);
firstNameInput.addEventListener("blur", () =>
  validateName(firstNameInput, firstNameError),
);
lastNameInput.addEventListener("blur", () =>
  validateName(lastNameInput, lastNameError),
);
cardNumberInput.addEventListener("blur", validateCardNumber);
expDateInput.addEventListener("blur", validateExpDate);
cvvInput.addEventListener("blur", validateCvv);
goBackBtn.addEventListener("click", goBack);

//Email validation
function validateEmail() {
  if (emailPattern.test(emailInput.value)) {
    emailError.innerText = "";
    emailInput.classList.remove("invalid");
    emailInput.setAttribute("aria-invalid", "false");
  } else {
    emailError.innerText =
      "Please enter correct email address (e.g. john@gmail.com)";
    emailInput.classList.add("invalid");
    emailInput.setAttribute("aria-invalid", "true");
    formCorrect = false;
  }
  allowSubmit();
}

//Phone validation

function validatePhone() {
  if (phonePattern.test(phoneInput.value)) {
    phoneError.innerText = "";
    phoneInput.classList.remove("invalid");
    phoneInput.setAttribute("aria-invalid", "false");
  } else {
    phoneError.innerText =
      "Please enter correct phone number (e.g. 530 345 66 66)";
    phoneInput.classList.add("invalid");
    phoneInput.setAttribute("aria-invalid", "true");
    formCorrect = false;
  }
  allowSubmit();
}

// Name validation

function validateName(input, errorField) {
  if (input.value.length >= 50) {
    errorField.innerText = "This field should contain less than 50 characters.";
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    formCorrect = false;
  } else {
    if (onlyLettersPattern.test(input.value)) {
      input.classList.remove("invalid");
      errorField.innerText = "";
      input.setAttribute("aria-invalid", "false");
    } else {
      errorField.innerText = "This field can only contain letters.";
      input.classList.add("invalid");
      input.setAttribute("aria-invalid", "true");
      formCorrect = false;
    }
  }
  allowSubmit();
}

// Card Number Validation

function validateCardNumber() {
  const cardNumbers = cardNumberInput.value.replace(/\s+/g, "");

  if (!cardPattern.test(cardNumbers)) {
    cardNumberError.innerText = "Please enter a 16-digit card number.";
    cardNumberInput.classList.add("invalid");
    cardNumberInput.setAttribute("aria-invalid", "true");
    formCorrect = false;
  } else {
    cardNumberError.innerText = "";
    cardNumberInput.classList.remove("invalid");
    cardNumberInput.setAttribute("aria-invalid", "false");
    formCorrect = true;
  }
  allowSubmit();
}

// Exp Date Validation

function validateExpDate() {
  if (!expDatePattern.test(expDateInput.value)) {
    expDateError.innerText = "Please enter a valid date.(e.g. 01/30)";
    expDateInput.classList.add("invalid");
    expDateInput.setAttribute("aria-invalid", "true");
    formCorrect = false;
  } else {
    expDateError.innerText = "";
    expDateInput.classList.remove("invalid");
    expDateInput.setAttribute("aria-invalid", "false");
    formCorrect = true;
  }
  allowSubmit();
}

// CVV Validation

function validateCvv() {
  if (!cvvPattern.test(cvvInput.value)) {
    cvvError.innerText = "Please enter a 3-digit Cvv number.";
    cvvInput.classList.add("invalid");
    cvvInput.setAttribute("aria-invalid", "false");
    formCorrect = false;
  } else {
    cvvError.innerText = "";
    cvvInput.classList.remove("invalid");
    cvvInput.setAttribute("aria-invalid", "false");
    formCorrect = true;
  }
  allowSubmit();
}

// Submit Event to Form Element
formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  formCorrect = true;
  validateEmail();
  validatePhone();
  validateName(firstNameInput, firstNameError);
  validateName(lastNameInput, lastNameError);
  validateCardNumber();
  validateExpDate();
  validateCvv();

  if (formCorrect) {
    successMessage.classList.remove("hidden");
    formElement.classList.add("hidden");
  }
});

// Button disablity
function allowSubmit() {
  const isNameValid =
    firstNameInput.value !== "" &&
    onlyLettersPattern.test(firstNameInput.value);
  const isLastNameValid =
    lastNameInput.value !== "" && onlyLettersPattern.test(lastNameInput.value);
  const isEmailValid =
    emailInput.value !== "" && emailPattern.test(emailInput.value);
  const isPhoneValid =
    phoneInput.value !== "" && phonePattern.test(phoneInput.value);
  const isCardNumberValid =
    cardNumberInput.value !== "" &&
    cardPattern.test(cardNumberInput.value.replace(/\s+/g, ""));
  const isExpDateValid =
    expDateInput.value !== "" && expDatePattern.test(expDateInput.value);
  const isCvvValid = cvvInput.value !== "" && cvvPattern.test(cvvInput.value);

  if (
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isCardNumberValid &&
    isExpDateValid &&
    isCvvValid
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.disabled = true;
  }
}

//Go Back Button

function goBack() {
  successMessage.classList.add("hidden");
  formElement.classList.remove("hidden");
  formElement.reset();

  goBackBtn.disabled = true;
}
