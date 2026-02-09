const dateInput = document.getElementById('date');
const selectedDate = document.getElementById('selected-date');
const nameInput = document.getElementById('name');
const summaryName = document.getElementById('summary-name');
const emailInput = document.getElementById('email');
const summaryEmail = document.getElementById('summary-email');

const confirmButton = document.getElementById('confirm');
const timeSlotButtons = document.getElementsByClassName('slot');
const selectedTime = document.getElementById('selected-time');
const bookingForm = document.querySelector('form.booking');

const confirmedName = document.getElementById('confirmed-name');
const confirmedEmail = document.getElementById('confirmed-email');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmationMessage = document.getElementById('confirmation-message');


const today = new Date();
today.setDate (today.getDate() +1);
const minDate = today.toISOString().split('T')[0];
dateInput.min = minDate;


const data = {
  date: null,
  time: null,
};

dateInput.addEventListener('change', function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  allowSubmit();
});

nameInput.addEventListener('change',function(){
  summaryName.textContent = nameInput.value;

})

emailInput.addEventListener('change',function(){
  summaryEmail.textContent = emailInput.value;
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
  // bookingForm.classList.add('hidden');
  bookingForm.textContent = ''
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmedName.textContent = nameInput.value;
  confirmedEmail.textContent = emailInput.value;
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
  if (data.date && data.time) {
    confirmButton.removeAttribute('disabled');
  }
}

