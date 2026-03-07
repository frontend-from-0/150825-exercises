const createForm = document.getElementById("create-form");
const loadingMessage = document.getElementById("loadingMessage");

const statusContainer = document.getElementById("statusContainer");
const statusMessage = document.getElementById("status");
const closeButton = document.getElementById("closeButton");
closeButton.classList.add("close-button");
closeButton.addEventListener("click", () => {
  statusContainer.classList.add("hidden");
});

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form is sending...");

  const newUser = {
    image: document.getElementById("image").value,
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
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

const goBackButton = document.getElementById("goBackButton");
goBackButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});
