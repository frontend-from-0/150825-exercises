const fetchBtn = document.getElementById('fetch-btn');
const container = document.getElementById('posts-container');

fetchBtn.addEventListener('click', () => {
  container.innerHTML = '<p>Yükleniyor...</p>';

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) throw new Error('Veri çekilemedi!');
      return response.json();
    })
    .then(posts => {
      container.innerHTML = ''; 
      
      posts.slice(0, 12).forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';

        const title = document.createElement('h3');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        card.appendChild(title);
        card.appendChild(body);

        container.appendChild(card);
      });
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red">Hata: ${error.message}</p>`;
    });
});