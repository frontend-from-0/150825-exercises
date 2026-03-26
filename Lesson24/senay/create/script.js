const createForm = document.getElementById("create-form");
const loadingMessage = document.getElementById("loadingMessage");

const imageInput = document.getElementById("image");
const firstNameInput = document.getElementById("firsName");
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

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form is sending...");

  const newUser = {
    image: imageInput.value.trim(),
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    age: ageInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error(`Failed creating a new user!`, res.status, res.statusText);
      }

      return res.json();
    })
    .then((data) => {
      showStatus(`The new user is successfully created!`, false);
      createForm.reset();
    })
    .catch((error) => {
      console.error(`Error: Failed creating a new user!`, error);

      showStatus(`Failed creating a new user`, true);
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
