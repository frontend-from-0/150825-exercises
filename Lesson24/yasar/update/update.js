const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');
const updateForm = document.getElementById('updateForm');


if (userId) {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(user => {
         firstNameInput.value = user.firstName;
         lastNameInput.value = user.lastName;
         ageInput.value = user.age;
      });
}


updateForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  updateUser();      
});



function updateUser() {
  
  const updatedUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: parseInt(ageInput.value),
  };

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser)
  })
  .then(res => res.json())
  .then(data => {
    // 1. Önce mesaj göster
    alert('The form update succesfully! ');
    
    // 2. Sonra ana sayfaya yönlendir
    window.location.href = '../index.html';
  });
}
  
