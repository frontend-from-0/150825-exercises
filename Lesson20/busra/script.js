const dateInput = document.getElementById("date");
const selectedDate = document.getElementById("selected-date");
const confirmButton = document.getElementById("confirm");
const timeSlotButtons = document.getElementsByClassName("slot");
const selectedTime = document.getElementById("selected-time");
const nameInput = document.getElementById("name");
const enteredName = document.getElementById("entered-name");
const emailInput = document.getElementById("email");
const enteredEmail = document.getElementById("entered-email");
const bookingForm = document.querySelector("form.booking");
const confirmedDate = document.getElementById("confirmed-date");
const confirmedTime = document.getElementById("confirmed-time");
const confirmedName = document.getElementById("confirmed-name");
const confirmedEmail = document.getElementById("confirmed-email");
const confirmationMessage = document.getElementById("confirmation-message");
const backButton = document.getElementById("back-btn");

const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};

dateInput.addEventListener("change", function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  allowSubmit();
});

[...timeSlotButtons].forEach((button) =>
  button.addEventListener("click", () => showSelectedTime(button)),
);
// Alternative:
// [...timeSlotButtons].forEach((button) =>
//   button.addEventListener('click', function() { showSelectedTime(button)}),
// );

nameInput.addEventListener("blur", function () {
  enteredName.textContent = nameInput.value;
  data.name = nameInput.value;
  allowSubmit();
});

emailInput.addEventListener("blur", function () {
  enteredEmail.textContent = emailInput.value;
  data.email = emailInput.value;
  allowSubmit();
});

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!data.date && !data.time && data.name && data.email) {
    return;
  }
  bookingForm.classList.add("hidden");
  //bookingForm.textContent = "";
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmationMessage.classList.remove("hidden");
});

backButton.addEventListener("click", function () {
  confirmationMessage.classList.add("hidden");
  bookingForm.classList.remove("hidden");
  bookingForm.reset();
  deselectTimeSlots();
  enteredName.textContent = "-";
  enteredEmail.textContent = "-";
  selectedDate.textContent = "-";
  selectedTime.textContent = "-";
});

function showSelectedTime(button) {
  deselectTimeSlots();
  button.classList.add("selected");
  selectedTime.textContent = button.textContent;
  data.time = button.textContent;
  allowSubmit();
}

function deselectTimeSlots() {
  [...timeSlotButtons].forEach((button) => button.classList.remove("selected"));
}

function allowSubmit() {
  if (data.date && data.time && data.name && data.email) {
    confirmButton.removeAttribute("disabled");
  }
}
