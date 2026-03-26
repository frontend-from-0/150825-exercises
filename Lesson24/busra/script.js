/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method

Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

// API to use in the lesson: https://dummyjson.com/docs/users

// VARIABLE

const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const numberPattern = /^[0-9]{1,3}$/;

const getUsersButton = document.getElementById("getUsersButton");

const usersContainer = document.getElementById("users");
const statusContainer = document.getElementById("statusContainer");
const status = document.getElementById("status");
const deleteContainer = document.getElementById("deleteContainer");
const closeButton = document.getElementById("close");

const updateForm = document.getElementById("updateForm");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const ageInput = document.getElementById("age");
const firstNameError = document.getElementById("firstnameError");
const lastNameError = document.getElementById("lastnameError");
const ageError = document.getElementById("ageError");

// EVENT LISTENER

getUsersButton?.addEventListener("click", fetchUsers);

closeButton?.addEventListener("click", closeNotification);

firstNameInput.addEventListener("blur", () =>
  validateName(firstNameInput, firstNameError),
);
lastNameInput.addEventListener("blur", () =>
  validateName(lastNameInput, lastNameError),
);

ageInput.addEventListener("blur", validateAge);

updateForm.addEventListener("submit", function (event) {
  event.preventDefault();

  validateName(firstNameInput, firstNameError);
  validateName(lastNameInput, lastNameError);
  validateAge();
});

// FUNCTİON

function fetchUsers() {
  fetch("https://dummyjson.com/users")
    .then((response) => {
      if (!response.ok) {
        throw Error(
          `Failed fetching all users`,
          response.status,
          response.statusText,
        );
      }
      return response.json();
    })
    .then((data) => {
      data.users.forEach((user) => createUserCard(user));
    })
    .catch((error) => {
      // TODO: add logic to handle errors (e.g. display error message)
    });
}

// HELPER FUNCTION

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = user.firstName + " " + user.lastName;

  const cardBody = document.createElement("p");
  cardBody.classList.add("card-body");
  cardBody.textContent = "Age: " + user.age;

  const cardCtas = document.createElement("div");
  cardCtas.classList.add("card-ctas");

  const updateButton = document.createElement("a");
  updateButton.classList.add("button");
  updateButton.textContent = "Update user";
  updateButton.href = `./update/index.html?userId=${user.id}`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("button", "button--delete");
  deleteButton.textContent = "Delete User";

  deleteButton.addEventListener("click", () => deleteUser(user.id, card));

  card.appendChild(cardTitle);
  card.appendChild(cardBody);

  cardCtas.appendChild(updateButton);
  cardCtas.appendChild(deleteButton);

  card.appendChild(cardCtas);

  usersContainer.appendChild(card);
}

function closeNotification() {
  deleteContainer.classList.add("hidden");
}

function validateName(input, errorField) {
  errorField.textContent = "";
  if (input.value.trim().length >= 50) {
    errorField.textContent =
      "This field should contain less than 50 characters.";
    input.setAttribute("aria-invalid", "true");
  } else if (!onlyLettersPattern.test(input.value.trim())) {
    errorField.textContent = "This field can only contain letters.";
    input.setAttribute("aria-invalid", "true");
  }
}

function validateAge() {
  if (numberPattern.test(ageInput.value.trim())) {
    ageError.textContent = "";
    ageInput.removeAttribute("aria-invalid");
  } else {
    ageError.textContent = "Please enter your age in digits.";
    ageInput.setAttribute("aria-invalid", "true");
  }
}

function deleteUserCard(user, card) {
  if (card) {
    card.remove();
  }
  deleteContainer.classList.remove("hidden");

  const deleteMessage = document.getElementById("deleteMessage");
  deleteMessage.textContent = `User ${user.firstName} ${user.lastName} deleted successfully.`;
}

function deleteUser(userId, card) {
  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed deleting user ${userId},
          ${response.status},
          ${response.statusText}`,
        );
      }
      return response.json();
    })
    .then((user) => deleteUserCard(user, card))

    .catch((error) => {
      //DÜZENLE
      console.error("Error: ", error);
      statusContainer.classList.remove("hidden");
      status.textContent = `Failed deleting user ${userId}`;
    });
}

function updateUser(updateField, newValue) {
  const bodyObject = {};

  bodyObject.updateField = newValue;

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObject),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed updating user ${userId},
          ${response.status},
          ${response.statusText}`,
      );
    }
    return response.json();
  });
  //.then((user) => updateUserCard(user, card));
}
