const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const cardPattern = /^\d{16}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^[0-9]{3,4}$/;


const formElement = document.getElementById('checkoutForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const firstNameInput = document.getElementById('firstname');
const firstNameError = document.getElementById('firstnameError');
const lastNameInput = document.getElementById('lastname');
const lastNameError = document.getElementById('lastnameError');
const cardNumberInput = document.getElementById('cardnumber');
const cardNumberError = document.getElementById('cardnumberError');
const cardExpDateInput = document.getElementById('expDate');
const cardExpDateError = document.getElementById('expDateError');
const cvvInput = document.getElementById('cvv');
const cvvError = document.getElementById('cvvError');


let formCorrect = true;

emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
cardNumberInput.addEventListener('blur', validateCardNumber);
cardExpDateInput.addEventListener('blur', validateCardExpDate);
cvvInput.addEventListener('blur', validateCVV);
firstNameInput.addEventListener('blur', () =>
  validateName(firstNameInput, firstNameError),
);
lastNameInput.addEventListener('blur', () =>
  validatelastName(lastNameInput, lastNameError),
);

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
  const value = phoneInput.value.trim();
  if (value.length === 0) {
    phoneError.innerText = 'Phone number is required.';
    formCorrect = false;
    return false;
  }
  if (phonePattern.test(phoneInput.value)) {
    phoneError.innerText = '';
    return true;
  } else {
    phoneError.innerText =
      'Please enter correct phone number (e.g. 530 345 66 66)';
    formCorrect = false;
    return false;
  }
}

function validateName(input, errorField) {
  const value = input.value.trim();
  
  if(value.length === 0) {
    errorField.innerText = 'This field cannot be left blank.';
    formCorrect = false;
    return false;
  }
  if (value.length > 25) {
    errorField.innerText = 'This field should contain less than 25 characters.';
    formCorrect = false;
    return false;
  }
   
    if (onlyLettersPattern.test(value)) {
      errorField.innerText = '';
      return true;
    } else {
      errorField.innerText = 'This field can only contain letters.';
      formCorrect = false;
      return false;
    }
  }


  function validatelastName(input, errorField) {
    const value = input.value.trim();

    if(value.length === 0) {
    errorField.innerText = 'This field cannot be left blank.';
    formCorrect = false;
    return false;
  }
  if (value.length > 25) {
    errorField.innerText = 'This field should contain less than 25 characters.';
    formCorrect = false;
    return false;
  }
   
    if (onlyLettersPattern.test(value)) {
      errorField.innerText = '';
      return true;
    } else {
      errorField.innerText = 'This field can only contain letters.';
      formCorrect = false;
      return false;
    }
  }
  
function validateCardNumber() {
  const value = cardNumberInput.value.replace(/\s+/g, '');
  if (cardPattern.test(value)) {
    cardNumberError.innerText = '';
    return true;
  } else {
    cardNumberError.innerText = 'Please enter a valid 16-digit card number.';
    formCorrect = false;
    return false;
  }
}




function validateCardExpDate() {
  const value = cardExpDateInput.value.trim();
  
  if (!expDatePattern.test(value)) {
    cardExpDateError.innerText = 'Please enter correct card exp (e.g. 03/26)';
    formCorrect = false;
    return false;
  }

  const [month, year] = value.split('/').map(num => parseInt(num, 10));
  
  cardExpDateError.innerText = '';
  return true;
}

function validateCVV() {
  const value = cvvInput.value.trim();

  if (cvvPattern.test(value)) {
    cvvError.innerText = '';
    return true;
  } else {
    cvvError.innerText = 'Invalid CVV';
    formCorrect = false;
    return false;
  }
}




formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  formCorrect = true;
  validateEmail(emailInput, emailError);
  validatePhone(phoneInput, phoneError);
  validateCardNumber(cardNumberInput, cardNumberError);
  validateCardExpDate(cardExpDateInput, cardExpDateError);
  validateName(firstNameInput, firstNameError);
  validatelastName(lastNameInput, lastNameError);
  

  if (formCorrect) {
    document.getElementById('success').classList.remove('hidden');
    formElement.classList.add('hidden');
    console.log("Form submitted successfully!");
  } else {
    alert ("Please fix the errors in the form before submitting.")
    console.log("Form has errors, submission blocked.");
  }
});


