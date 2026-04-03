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

const usersContainer = document.getElementById('users');
const statusContainer = document.getElementById('statusContainer');
const statusMsg = document.getElementById('status');

if (document.getElementById('getUsersButton')) {
    document.getElementById('getUsersButton').addEventListener('click', fetchUsers);
}

function fetchUsers() {
    usersContainer.innerHTML = "Loading...";
    fetch('https://dummyjson.com/users')
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => {
            usersContainer.innerHTML = "";
            data.users.forEach(user => createUserCard(user));
        })
        .catch(err => showStatus("Failed to fetch users!", "danger"));
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `user-${user.id}`; // Silme işlemi için ID verdik

    card.innerHTML = `
        <h2 class="card-title">${user.firstName} ${user.lastName}</h2>
        <p class="card-body">Age: ${user.age} | Email: ${user.email}</p>
        <div class="ctas">
            <a class="button" href="./update/index.html?userId=${user.id}">Update</a>
            <button class="button button--danger" onclick="deleteUser(${user.id})">Delete</button>
        </div>
    `;
    usersContainer.appendChild(card);
}

function deleteUser(userId) {
    if (!confirm("Are you sure?")) return;

    fetch(`https://dummyjson.com/users/${userId}`, { method: 'DELETE' })
        .then(res => {
            if (res.ok) {
                document.getElementById(`user-${userId}`).remove();
                showStatus(`User ${userId} deleted successfully!`, "success");
            }
        })
        .catch(() => showStatus("Delete failed!", "danger"));
}

function showStatus(text, type) {
    statusContainer.classList.remove('hidden');
    statusMsg.textContent = text;
    statusContainer.style.backgroundColor = type === "success" ? "#d4edda" : "#f8d7da";
}