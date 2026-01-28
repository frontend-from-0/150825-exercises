//Defining Variables - Sellecting elements by using get method.
const dateInput = document.getElementById("date");
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
const filledName = document.getElementById("filled-name");
const confirmedName = document.getElementById("confirmed-name");
const emailInput = document.getElementById("email");
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

//name -> add "input" event
//name input -> data.name

nameInput.addEventListener("blur", function () {
  filledName.textContent = nameInput.value;
  data.name = nameInput.value;
  allowSubmit();
  if (!nameRegex.test(data.name) && data.name !== "") {
    nameInput.style.borderColor = "red";
  } else {
    nameInput.style.borderColor = "";
  }
});

//email -> add "input" evet
//email input -> data.name

emailInput.addEventListener("blur", function () {
  filledEmail.textContent = emailInput.value;
  data.email = emailInput.value;
  allowSubmit();

  if (!emailRegex.test(data.email) && data.email !== "") {
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "";
  }
});

// date -> add "change" event
//Date Input value -> data.date, selectedDate

dateInput.addEventListener("change", function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
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
  if (data.date && data.time && data.name && data.email) {
    if (nameRegex.test(data.name) && emailRegex.test(data.email)) {
      confirmButton.removeAttribute("disabled");
    }
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
