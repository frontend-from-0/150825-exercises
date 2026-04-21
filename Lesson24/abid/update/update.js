const updateForm = document.getElementById('updateUserForm');
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

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

if (!userId) {
  showStatus('No User ID provided in URL!', true);
} else {
  fetch(`https://dummyjson.com/users/${userId}`)
    .then(res => {
      if(!res.ok) throw Error('User not found');
      return res.json();
    })
    .then(user => {
      document.getElementById('firstName').value = user.firstName;
      document.getElementById('lastName').value = user.lastName;
      document.getElementById('age').value = user.age;
    })
    .catch(err => showStatus(err.message, true));

  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!firstName || !lastName || !age) {
      showStatus('Please fill out all fields. Spaces are not allowed.', true);
      return;
    }

    const updatedData = { firstName, lastName, age };

    fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    })
    .then(res => {
      if(!res.ok) throw Error(`Failed to update user: ${res.statusText}`);
      return res.json();
    })
    .then(data => {
      showStatus(`User ${data.firstName} updated successfully!`, false);
    })
    .catch(error => {
      showStatus(error.message, true);
    });
  });
}