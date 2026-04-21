const createForm = document.getElementById('createUserForm');
const statusContainer = document.getElementById('statusContainer');
const statusText = document.getElementById('status');
const closeStatusBtn = document.getElementById('closeStatus');

if (closeStatusBtn) {
  closeStatusBtn.addEventListener('click', () => {
    statusContainer.classList.add('hidden');
  });
}

function showStatus(message, isError = true) {
  statusContainer.classList.remove('hidden');
  statusText.textContent = message;
  statusContainer.style.backgroundColor = isError ? '#ffcccc' : '#ccffcc'; 
}

createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const age = document.getElementById('age').value.trim();
  if (!firstName || !lastName || !age) {
    showStatus('Please fill out all fields. Spaces are not allowed.', true);
    return;
  }
  const newUser = { firstName, lastName, age };

  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
  })
  .then(res => {
    if(!res.ok) throw Error(`Failed to create user: ${res.statusText}`);
    return res.json();
  })
  .then(data => {
    showStatus(`User ${data.firstName} created successfully with ID: ${data.id}`, false);
    createForm.reset(); 
  })
  .catch(error => {
    showStatus(error.message, true);
  });
});