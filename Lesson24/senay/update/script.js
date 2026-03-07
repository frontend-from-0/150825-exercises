const updateForm = document.getElementById("update-form");
const loadingMessage = document.getElementById("loadingMessage");

const statusContainer = document.getElementById("statusContainer");
const statusMessage = document.getElementById("status");
const closeButton = document.getElementById("closeButton");
closeButton.classList.add("close-button");
closeButton.addEventListener("click", () => {
  statusContainer.classList.add("hidden");
});

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

document.addEventListener("DOMContentLoaded", () => {
  if (userId) {
    fetchUserDetails(userId);
  } else {
    showStatus("No user ID found in the URL!", true);
  }
});

function fetchUserDetails(id) {
  loadingMessage.style.display = "block";
  updateForm.classList.add("hidden");

  fetch(`https://dummyjson.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("User not found!", error.status);
      }
      return res.json();
    })
    .then((user) => {
      document.getElementById("image").value = user.image;
      document.getElementById("firstName").value = user.firstName;
      document.getElementById("lastName").value = user.lastName;
      document.getElementById("age").value = user.age;
      document.getElementById("email").value = user.email;
      document.getElementById("phone").value = user.phone;
      document.getElementById("username").value = user.username;
      document.getElementById("password").value = user.password;

      loadingMessage.style.display = "none";
      updateForm.style.display = "flex";
      updateForm.classList.remove("hidden");
    })
    .catch((error) => {
      console.error(error);
      loadingMessage.style.display = "none";
      showStatus(`Error: ${error.message}. Please try again later.`, true);
    });
}

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form is sending...");

  const updatedData = {
    image: document.getElementById("image").value,
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error(
          `Failed updating user ${userId}!`,
          res.status,
          res.statusText,
        );
      }

      return res.json();
    })
    .then((data) => {
      showStatus(`User ${userId} is successfully updated!`, false);
    })
    .catch((error) => {
      console.error(`Error: Failed updating user ${userId}!`, error);

      showStatus(`Failed updating user ${userId}`, true);
    });
});

function showStatus(message, isError = false) {
  statusContainer.classList.remove("hidden", "success-box", "error-box");
  statusMessage.textContent = message;

  if (isError) {
    statusContainer.classList.add("error-box");
  } else {
    statusContainer.classList.add("success-box");
  }
}

const goBackButton = document.getElementById("goBackButton");
goBackButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});
