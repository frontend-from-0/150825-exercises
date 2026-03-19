let createUserForm;

document.addEventListener("DOMContentLoaded", function () {
  createUserForm = document.getElementById("createForm");
  createUserForm.addEventListener("submit", createUser);
});

function showStatus(message, success) {
  alert(message);
}

function createUser(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!firstName || !lastName || !age) {
    showStatus("Please fill in all fields!", false);
    return;
  }

  const ageNumber = parseInt(age, 10);
  if (ageNumber < 1 || ageNumber > 99) {
    showStatus("Please enter a valid age (between 1 and 99)!", false);
    return;
  }

  const newUser = {
    firstName,
    lastName,
    age,
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
        true
      );

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 2000);
    })
    .catch(() => {
      showStatus("Failed creating user", false);
    });
}