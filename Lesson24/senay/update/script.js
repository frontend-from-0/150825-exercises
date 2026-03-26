const updateForm = document.getElementById("update-form");
const loadingMessage = document.getElementById("loadingMessage");

const imageInput = document.getElementById("image");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const statusContainer = document.getElementById("statusContainer");
const statusMessage = document.getElementById("status");
const closeButton = document.getElementById("closeButton");

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
  loadingMessage.classList.add("display-block");
  updateForm.classList.add("hidden");

  fetch(`https://dummyjson.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("User not found!", error.status);
      }
      return res.json();
    })
    .then((user) => {
      imageInput.value = user.image;
      firstNameInput.value = user.firstName;
      lastNameInput.value = user.lastName;
      ageInput.value = user.age;
      emailInput.value = user.email;
      phoneInput.value = user.phone;
      usernameInput.value = user.username;
      passwordInput.value = user.password;

      loadingMessage.classList.remove("display-block");
      loadingMessage.classList.add("hidden");
      updateForm.style.display = "flex";
      updateForm.classList.remove("hidden");
    })
    .catch((error) => {
      console.error(error);
      loadingMessage.classList.remove("display-block");
      loadingMessage.classList.add("hidden");

      showStatus(`Error: ${error.message}. Please try again later.`, true);
    });
}

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form is sending...");

  const updatedData = {
    image: imageInput.value.trim(),
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    age: ageInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
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
