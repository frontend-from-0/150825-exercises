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

// VARIABLES

const getUsersButton = document.getElementById("getUsersButton");
const statusContainer = document.getElementById("statusContainer");
const statusMessage = document.getElementById("statusMessage");
const closeButton = document.getElementById("close");
const closeError = document.getElementById("closeError");
const deleteNotice = document.getElementById("deleteNotice");
const usersContainer = document.getElementById("usersContainer");

// EVENT LISTENERS

getUsersButton.addEventListener("click", fetchUsers);

closeButton.addEventListener("click", closeNotification);

closeError.addEventListener("click", closeNotification);

// FUNCTIONS

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
    .catch((error) =>
      statusError(error, `System Error: Unable to fetch users data.`),
    );
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = `${user.firstName} ${user.lastName}`;

  const cardBody = document.createElement("p");
  cardBody.classList.add("card-body");
  cardBody.textContent = `Age: ${user.age}`;

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
  if (deleteNotice) {
    deleteNotice.classList.add("hidden");
  }
  if (statusContainer) {
    statusContainer.classList.add("hidden");
  }
}

function statusError(error, message) {
  statusContainer.classList.remove("hidden");
  statusMessage.textContent = message + " Details: " + error.message;
}

function deleteUserCard(user, card) {
  if (card) {
    card.remove();
  }
  deleteNotice.classList.remove("hidden");

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

    .catch((error) =>
      statusError(error, `System Error: User ${userId} could not be removed.`),
    );
}
