const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');
const updateForm = document.getElementById('updateForm');
const statusContainer = document.getElementById('statusContainer');
const statusText = document.getElementById('status');

// 1. Mevcut Kullanıcı Bilgilerini Getir
if (userId) {
  fetch(`https://dummyjson.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      firstNameInput.value = user.firstName;
      lastNameInput.value = user.lastName;
      ageInput.value = user.age;
    })
    .catch(() => showMessage("User data could not be loaded.", false));
}

// 2. Mesaj Gösterme Fonksiyonu (ARIA uyumlu)
function showMessage(message, isSuccess = true) {
  statusText.textContent = message;
  statusContainer.classList.remove('hidden', 'error-theme', 'success-theme');
  statusContainer.classList.add(isSuccess ? 'success-theme' : 'error-theme');
}

// 3. Form Gönderimi ve Güncelleme
updateForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // TRIM İŞLEMİ: Boşlukları temizle
  const fName = firstNameInput.value.trim();
  const lName = lastNameInput.value.trim();
  const ageValue = parseInt(ageInput.value);

  // Boşluk/Karakter Kontrolü
  if (!fName || !lName) {
    showMessage('Please enter valid names without just spaces.', false);
    return;
  }

  const updatedUser = {
    firstName: fName,
    lastName: lName,
    age: ageValue,
  };

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser)
  })
  .then(res => {
    if (!res.ok) throw new Error('Update failed on server');
    return res.json();
  })
  .then(() => {
    // BAŞARI: Önce mesajı göster, 2 saniye sonra yönlendir
    showMessage('The form updated successfully! ✅ Redirecting...', true);
    setTimeout(() => {
      window.location.href = '../index.html';
    }, 2000);
  })
  .catch(err => {
    showMessage('Error: ' + err.message, false);
  });
});
