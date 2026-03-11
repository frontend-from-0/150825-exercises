const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const displayName = document.getElementById('selected-name');
const displayEmail = document.getElementById('selected-email');
const dateInput = document.getElementById('date');
const selectedDate = document.getElementById('selected-date');
const confirmButton = document.getElementById('confirm');
const timeSlotButtons = document.getElementsByClassName('slot');
const selectedTime = document.getElementById('selected-time');
const bookingForm = document.querySelector('form.booking');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmationMessage = document.getElementById('confirmation-message');
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
dateInput.min = tomorrow.toISOString().split('T')[0];

const data = {
  name:'',
  email: '',
  date: null,
  time: null,
};
nameInput.addEventListener('input', function () {
   data.name = nameInput.value;
  displayName.textContent = data.name || '-';
  allowSubmit();
});

emailInput.addEventListener('input', function () {
  data.email = emailInput.value;
  displayEmail.textContent = data.email || '-';
  allowSubmit();
});

dateInput.addEventListener('change', function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  allowSubmit();
});

[...timeSlotButtons].forEach((button) =>
  button.addEventListener('click', () => showSelectedTime(button)),
);
// Alternative:
// [...timeSlotButtons].forEach((button) =>
//   button.addEventListener('click', function() { showSelectedTime(button)}),
// );

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  if (!data.date && !data.time) {
    return;
  }
   bookingForm.classList.add('hidden');
   document.getElementById('confirmed-name').textContent = data.name;
   document.getElementById('confirmed-email').textContent = data.email;
  bookingForm.textContent = ''
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmationMessage.classList.remove('hidden');
});

function showSelectedTime(button) {
  deselectTimeSlots();
  button.classList.add('selected');
  selectedTime.textContent = button.textContent;
  data.time = button.textContent;
  allowSubmit();
}

function deselectTimeSlots() {
  [...timeSlotButtons].forEach((button) => button.classList.remove('selected'));
}

function allowSubmit() {
  if (data.date && data.time&& data.name && data.email) {
    confirmButton.removeAttribute('disabled');
  }else {
    confirmButton.setAttribute('disabled', 'true');
  }
}