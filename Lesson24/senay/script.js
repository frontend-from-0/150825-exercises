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

//Define container - status error box

const usersContainer = document.getElementById("users");
const statusContainer = document.getElementById("statusContainer");
const statusMessage = document.getElementById("status");
const closeButton = document.getElementById("closeButton");
closeButton.classList.add("close-button");
closeButton.addEventListener("click", () => {
  console.log("The close button is clicked!");
  statusContainer.classList.add("hidden");
});

// Add event listerner for GET USERS Button
document.getElementById("getUsersButton").addEventListener("click", fetchUsers);

// Get Data by fetching from dummyjson.com url address
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
      statusContainer.classList.add("hidden");
      //creating a user card

      data.users.forEach((user) => createUserCard(user));
    })
    .catch((error) => {
      // TODO: add logic to handle errors (e.g. display error message)
      console.error(error);
      showStatus(`Error: ${error.message}. Please try again later.`, true);
    });
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `user-card-${user.id}`;

  const img = document.createElement("img");
  img.classList.add("image");
  img.src = user.image;
  img.alt = user.firstName + " " + user.lastName;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = user.firstName + " " + user.lastName;

  const cardBody = document.createElement("p");
  cardBody.classList.add("card-body");
  cardBody.style.whiteSpace = "pre-line";
  cardBody.style.lineHeight = 2;
  cardBody.textContent = "Age: " + user.age + "\n" + "Email: " + user.email;

  const cardCtas = document.createElement("div");
  cardCtas.classList.add("ctas");

  const updateButton = document.createElement("a");
  updateButton.classList.add("button");
  updateButton.textContent = "Update user";
  updateButton.href = `./update/index.html?userId=${user.id}`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("button");
  deleteButton.textContent = "Delete User";

  deleteButton.addEventListener("click", () => deleteUser(user.id));

  usersContainer.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardBody);
  cardInfo.appendChild(cardCtas);
  cardCtas.appendChild(updateButton);
  cardCtas.appendChild(deleteButton);
}

function showStatus(message, isError = false) {
  statusContainer.classList.remove("hidden", "success-box", "error-box");
  statusMessage.textContent = message;

  if (isError) {
    statusContainer.classList.add("error-box");
  } else {
    statusContainer.classList.add("success-box");
  }
}

function deleteUser(userId) {
  console.log("Deleting user...");
  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Error: Failed deleting user ${userId}!`,
          res.status,
          res.statusText,
        );
      }

      return res.json();
    })
    .then((data) => {
      console.log("Message is sending...");
      console.log(
        `User ${userId} is successfully deleted!, showStatus is calling...`,
      );
      // Show notification in the HTML that the user was deleted (and which user was deleted)
      showStatus(`User ${userId} is successfully deleted!`, false);
      console.log("showStatus has been called.");
      // Remove the user card or change it's appearance so it's easy to understand that this user was deleted
      const userCard = document.getElementById(`user-card-${userId}`);
      if (userCard) {
        userCard.remove();
      }
    })
    .catch((error) => {
      console.error(`Error: Failed deleting user ${userId}!`, error);
      showStatus(`Failed deleting user ${userId}`, true);
    });
}
