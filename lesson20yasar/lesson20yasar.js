const dateInput = document.getElementById('date');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const telephoneInput = document.getElementById('telephone');

const selectedDate = document.getElementById('selected-date');
const selectedTime = document.getElementById('selected-time');
const selectedName = document.getElementById('selected-name');
const selectedEmail = document.getElementById('selected-email');
const selectedTelephone = document.getElementById('selected-telephone');


const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmedName = document.getElementById('confirmed-name');
const confirmedEmail = document.getElementById('confirmed-email');
const confirmedTelephone = document.getElementById('confirmed-telephone');


const confirmButton = document.getElementById('confirm');
const timeSlotButtons = document.getElementsByClassName('slot');
const bookingForm = document.querySelector('form.booking');
const confirmationMessage = document.getElementById('confirmation-message');

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); 
const day = String(now.getDate()).padStart(2, '0');
const todayStr = `${year}-${month}-${day}`;

const futureDate = new Date();
futureDate.setDate(now.getDate() + 15); 
const fYear = futureDate.getFullYear();
const fMonth = String(futureDate.getMonth() + 1).padStart(2, '0');
const fDay = String(futureDate.getDate()).padStart(2, '0');
const maxDateStr = `${fYear}-${fMonth}-${fDay}`;

if (dateInput) {
  dateInput.max = maxDateStr;
}
if (dateInput) {
  dateInput.min = todayStr;
}


const data = {
  date: null,
  time: null,
name: null,
email: null,
telephone: null,
};

if (dateInput) {
  dateInput.addEventListener('change', function () {
    selectedDate.textContent = dateInput.value;
    data.date = dateInput.value;
    allowSubmit();
  });
}

nameInput.addEventListener('change', function () {
  selectedName.textContent = nameInput.value;
  data.name = nameInput.value;
  allowSubmit();
});

emailInput.addEventListener('change', function () {
  selectedEmail.textContent = emailInput.value; 
  data.email = emailInput.value;
  allowSubmit();
});

telephoneInput.addEventListener('change', function () {
  selectedTelephone.textContent = telephoneInput.value;
  data.telephone = telephoneInput.value;
  allowSubmit();
});

[...timeSlotButtons].forEach((button) =>
  button.addEventListener('click', () => showSelectedTime(button)),
);

// Alternative:
// [...timeSlotButtons].forEach((button) =>
//   button.addEventListener('click', function() { showSelectedTime(button)}),
// );

if (bookingForm) {
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!data.date || !data.time || !data.name || !data.email || !data.telephone ) { return; }
    bookingForm.classList.add('hidden');
    confirmedDate.textContent = data.date;
    confirmedTime.textContent = data.time;
    confirmedName.textContent = data.name;
    confirmedEmail.textContent = data.email;
    confirmedTelephone.textContent = data.telephone;
    confirmationMessage.classList.remove('hidden');
  });
}

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
  if (data.date && data.time && data.name && data.email && data.telephone) {
    confirmButton.removeAttribute('disabled');
  }
}