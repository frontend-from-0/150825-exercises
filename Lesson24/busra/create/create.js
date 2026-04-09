// VARIABLES

const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const numberPattern = /^\d+$/;

const createForm = document.getElementById("createForm");
const createNotice = document.getElementById("createNotice");

const statusContainer = document.getElementById("statusContainer");
const statusMessage = document.getElementById("statusMessage");
const closeButton = document.getElementById("close");
const closeError = document.getElementById("closeError");

const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const ageInput = document.getElementById("age");
const firstNameError = document.getElementById("firstnameError");
const lastNameError = document.getElementById("lastnameError");
const ageError = document.getElementById("ageError");

let formCorrect = true;

// EVENT LISTENERS

createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formCorrect = true;

  validateName(firstNameInput, firstNameError);
  validateName(lastNameInput, lastNameError);
  validateAge();

  if (formCorrect === false) {
    return;
  }
  createUser(e);
});

firstNameInput.addEventListener("blur", () =>
  validateName(firstNameInput, firstNameError),
);
lastNameInput.addEventListener("blur", () =>
  validateName(lastNameInput, lastNameError),
);
ageInput.addEventListener("blur", validateAge);

closeButton.addEventListener("click", closeNotification);

closeError.addEventListener("click", closeNotification);

// FUNCTIONS

function validateName(input, errorField) {
  if (input.value.trim().length >= 50) {
    errorField.textContent =
      "This field should contain less than 50 characters.";
    formCorrect = false;
    input.setAttribute("aria-invalid", "true");
  } else if (!onlyLettersPattern.test(input.value.trim())) {
    errorField.textContent = "This field can only contain letters.";
    formCorrect = false;
    input.setAttribute("aria-invalid", "true");
  } else {
    errorField.textContent = "";
    input.removeAttribute("aria-invalid");
  }
}

function validateAge() {
  const age = ageInput.value.trim();

  if (parseInt(age) > 99) {
    ageError.textContent = "Please enter a valid age.";
    formCorrect = false;
    ageInput.setAttribute("aria-invalid", "true");
  } else if (!numberPattern.test(age)) {
    ageError.textContent = "Please enter your age in digits.";
    formCorrect = false;
    ageInput.setAttribute("aria-invalid", "true");
  } else {
    ageError.textContent = "";
    ageInput.removeAttribute("aria-invalid");
  }
}

function createSuccess(user) {
  createNotice.classList.remove("hidden");

  const createMessage = document.getElementById("createMessage");
  createMessage.textContent = `User ${user.firstName} ${user.lastName} created successfully.`;
}

function statusError(error, message) {
  statusContainer.classList.remove("hidden");
  statusMessage.textContent = message + " Details: " + error.message;

  statusContainer.style.backgroundColor = "#9d2929";
}

function closeNotification() {
  if (createNotice) {
    createNotice.classList.add("hidden");
  }
  if (statusContainer) {
    statusContainer.classList.add("hidden");
  }
}

function createUser(e) {
  e.preventDefault();

  const bodyObject = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    age: ageInput.value.trim(),
  };

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObject),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed creating user,
          ${response.status},
          ${response.statusText}`,
        );
      }
      return response.json();
    })
    .then((createdUser) => createSuccess(createdUser))
    .catch((error) =>
      statusError(error, `System Error: User could not be added.`),
    );
}
