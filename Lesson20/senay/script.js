//Defining Variables - Sellecting elements by using get method.
const dateInput = document.getElementById("date");
const dateError = document.getElementById("dateError");
const selectedDate = document.getElementById("selected-date");
const confirmButton = document.getElementById("confirm");
const timeSlotButtons = document.getElementsByClassName("slot");
const selectedTime = document.getElementById("selected-time");
const bookingForm = document.querySelector("form.booking");
const confirmedDate = document.getElementById("confirmed-date");
const confirmedTime = document.getElementById("confirmed-time");
const confirmationMessage = document.getElementById("confirmation-message");
const timeSlotContainer = document.getElementById("timeslots");

const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const filledName = document.getElementById("filled-name");
const confirmedName = document.getElementById("confirmed-name");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const filledEmail = document.getElementById("filled-email");
const confirmedEmail = document.getElementById("confirmed-email");

// Regex Expression Variables

const nameRegex = /^[A-Za-z]+(\s[A-Za-z]+)+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

//Define today /min date
const todayDate = new Date();
const minDate = todayDate.toISOString().split("T")[0];

//Define max date (Total 3 days)

const futureDate = new Date();
futureDate.setDate(todayDate.getDate() + 2);
const maxDate = futureDate.toISOString().split("T")[0];

//Aplly min - max attribute to date input
dateInput.setAttribute("min", minDate);
dateInput.setAttribute("max", maxDate);

// Define Empty Data Object
const data = {
  name: "",
  email: "",
  date: null,
  time: null,
};

//name -> add "blur" event
//name input -> data.name

nameInput.addEventListener("blur", function () {
  filledName.textContent = nameInput.value;
  data.name = nameInput.value;
  allowSubmit();

  const isInvalidName = !nameRegex.test(data.name) && data.name !== "";

  if (isInvalidName) {
    nameError.innerText = "Please enter a valid name.";
    nameInput.classList.add("invalid");
  } else {
    nameError.innerText = "";
    nameInput.classList.remove("invalid");
  }
});

//email -> add "blur" evet
//email input -> data.name

emailInput.addEventListener("blur", function () {
  filledEmail.textContent = emailInput.value;
  data.email = emailInput.value;
  allowSubmit();

  const isInvalidEmail = !emailRegex.test(data.email) && data.email !== "";
  if (isInvalidEmail) {
    emailError.innerText =
      "Please enter a valid email address (e.g., name@example.com).";
    emailInput.classList.add("invalid");
  } else {
    emailError.innerText = "";
    emailInput.classList.remove("invalid");
  }
});

// date -> add "change" event
//Date Input value -> data.date, selectedDate

dateInput.addEventListener("change", function () {
  const selectedValue = dateInput.value;
  const isValidDate =
    selectedValue && selectedValue >= minDate && selectedValue <= maxDate;

  if (isValidDate) {
    data.date = dateInput.value;
    selectedDate.textContent = selectedValue;
    dateError.innerText = "";
    dateInput.classList.remove("invalid");
  } else {
    data.date = null;
    selectedDate.textContent = "-";
    dateError.innerText = "Please choose a valid date";
    dateInput.classList.add("invalid");
  }
  allowSubmit();
});

// button -> add 'click' event

[...timeSlotButtons].forEach((button) =>
  button.addEventListener("click", () => showSelectedTime(button)),
);
// Alternative:
// [...timeSlotButtons].forEach((button) =>
//   button.addEventListener('click', function() { showSelectedTime(button)}),
// );

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
  const isNameValid = data.name !== "" && nameRegex.test(data.name);
  const isEmailValid = data.email !== "" && emailRegex.test(data.email);
  const isDateValid =
    data.date &&
    data.date !== "-" &&
    data.date >= minDate &&
    data.date <= maxDate;
  const isTimeSelected = data.time !== null && data.time !== "";

  console.log({ isNameValid, isEmailValid, isDateValid, isTimeSelected });

  if (isNameValid && isEmailValid && isDateValid && isTimeSelected) {
    confirmButton.removeAttribute("disabled");
  } else {
    confirmButton.disabled = true;
  }
}

//Form Validation
// form -> add "submit" event

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!data.date && !data.time && !data.name && !data.email) {
    return;
  }
  bookingForm.classList.add("hidden");
  // bookingForm.textContent = "";
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmationMessage.classList.remove("hidden");
});

// Adding new slots in JS

function addNewSlot(timeValue) {
  if (!timeRegex.test(timeValue)) {
    alert("İnvalid time value!");
    return;
  }
  const newButton = document.createElement("button");

  newButton.textContent = timeValue;
  newButton.classList.add("slot");

  newButton.addEventListener("click", () => showSelectedTime(newButton));

  timeSlotContainer.appendChild(newButton);

  sortTimeSlots();
}

// Sorting the time slots

function sortTimeSlots() {
  const timeSlotButtons = document.getElementsByClassName("slot");
  const slots = [...timeSlotButtons].map((button) => button.textContent);
  slots.sort((a, b) => {
    const [h1, m1] = a.split(":").map(Number);
    const [h2, m2] = b.split(":").map(Number);
    return h1 * 60 + m1 - (h2 * 60 + m2);
  });
  timeSlotContainer.innerHTML = "";
  slots.forEach((time) => {
    const button = document.createElement("button");
    button.textContent = time;
    button.classList.add("slot");
    button.type = "button";

    button.addEventListener("click", () => showSelectedTime(button));

    timeSlotContainer.appendChild(button);
  });
}

addNewSlot("16:30");
addNewSlot("11:00");
addNewSlot("15:00");
