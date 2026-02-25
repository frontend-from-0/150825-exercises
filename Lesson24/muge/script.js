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

const usersContainer = document.getElementById("users");
const statusContainer = document.getElementById("statusContainer");
const statusMessage = document.getElementById("status");
const closeButton = document.getElementById("closeButton");
let updateUserId = null;

const createUserForm = document.getElementById("createUserForm");
const updateUserForm = document.getElementById("updateUserForm");
const getUsersButton = document.getElementById("getUsersButton");
const loader = document.getElementById("loader");

// --- 1. YARDIMCI FONKSİYON ---
function showStatus(message, isSuccess) {
  statusContainer.classList.remove(
    "hidden",
    "status--success",
    "status--error",
  );

  if (isSuccess) {
    statusContainer.classList.add("status--success");
  } else {
    statusContainer.classList.add("status--error");
  }

  statusMessage.textContent = message;
}

// --- 2.EVENT LISTENERS ---
if (getUsersButton) {
  getUsersButton.addEventListener("click", fetchUsers);
}

if (createUserForm) {
  createUserForm.addEventListener("submit", createUser);
}

if (updateUserForm) {
  updateUserForm.addEventListener("submit", updateUser);
  loadUserData();
}

if (closeButton) {
  closeButton.addEventListener("click", () => {
    statusContainer.classList.add("hidden");
  });
}

// --- 3. ANA FONKSİYONLAR ---
function fetchUsers() {
  // 1. İşlem başlarken eski listeyi temizle ve animasyonu göster
  usersContainer.innerHTML = "";
  if (loader) loader.classList.remove("hidden");

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
      // 2. Veriler başarıyla gelince animasyonu gizle
      if (loader) loader.classList.add("hidden");

      // Kullanıcıları ekrana çiz
      data.users.forEach((user) => createUserCard(user));
    })
    .catch(() => {
      // 3. Hata olursa da animasyonu gizle ki ekranda sonsuza kadar dönmesin
      if (loader) loader.classList.add("hidden");
      showStatus("Users loading failed!", false);
    });
}

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
  cardCtas.classList.add("ctas");

  const updateButton = document.createElement("a");
  updateButton.classList.add("button");
  updateButton.textContent = "Update user";
  updateButton.href = `./update/index.html?userId=${user.id}`;

  const deleteButton = document.createElement("button");
  // CSS'teki kırmızı buton stilini buraya da ekledim ('button--danger')
  deleteButton.classList.add("button", "button--danger");
  deleteButton.textContent = "Delete User";

  deleteButton.addEventListener("click", () => deleteUser(user, card));

  card.appendChild(cardTitle);
  card.appendChild(cardBody);

  cardCtas.appendChild(updateButton);
  cardCtas.appendChild(deleteButton);

  card.appendChild(cardCtas);
  usersContainer.appendChild(card);
}

function deleteUser(user, card) {
  fetch(`https://dummyjson.com/users/${user.id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(
          `Failed deleting user ${user.id}`,
          response.status,
          response.statusText,
        );
      }
      return response.json();
    })
    .then(() => {
      card.remove();
      showStatus(
        `User ${user.firstName} ${user.lastName} successfully deleted`,
        true,
      );
    })
    .catch((error) => {
      console.error(`Failed deleting user ${user.id}`, error);
      showStatus(
        `Failed deleting user ${user.firstName} ${user.lastName}`,
        false,
      );
    });
}

function createUser(event) {
  event.preventDefault();

  // .trim() ekleyerek sadece boşluk karakteri girilmesini engelle
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const age = document.getElementById("age").value.trim();

  // Eğer bu üçünden biri bile boşsa, hata ver ve işlemi durdur
  if (!firstName || !lastName || !age) {
    showStatus("Please fill in all fields!", false);
    return; // Kodun geri kalanını çalıştırmaz, fetch isteği atılmaz.
  }

  // Yaşın 1 ile 99 arasında olup olmadığını kontrol et
  const ageNumber = parseInt(age, 10);
  if (ageNumber < 1 || ageNumber > 99) {
    showStatus("Please enter a valid age (between 1 and 99)!", false);
    return;
  }

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      createUserForm.reset();
      showStatus(
        `User ${data.firstName} ${data.lastName} created successfully!`,
        true,
      );

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 2000);
    })
    .catch(() => {
      showStatus("Failed creating user", false);
    });
}

function loadUserData() {
  const urlParams = new URLSearchParams(window.location.search);
  updateUserId = urlParams.get("userId");

  if (updateUserId) {
    fetch(`https://dummyjson.com/users/${updateUserId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("firstName").value = data.firstName;
        document.getElementById("lastName").value = data.lastName;
        document.getElementById("age").value = data.age;
      });
  }
}

function updateUser(event) {
  event.preventDefault();

  if (!updateUserId) return;

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const age = document.getElementById("age").value.trim();

  // Boş alan kontrolü
  if (!firstName || !lastName || !age) {
    showStatus("Please fill in all fields!", false);
    return;
  }

  // Yaşın 1 ile 99 arasında olup olmadığını kontrol et
  const ageNumber = parseInt(age, 10);
  if (ageNumber < 1 || ageNumber > 99) {
    showStatus("Please enter a valid age (between 1 and 99)!", false);
    return;
  }

  const updatedData = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  fetch(`https://dummyjson.com/users/${updateUserId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((data) => {
      showStatus(
        `User ${data.firstName} ${data.lastName} updated successfully`,
        true,
      );

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 2000);
    })
    .catch(() => {
      showStatus("Failed updating user", false);
    });
}
