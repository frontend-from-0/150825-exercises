
const postsContainer = document.querySelector('.posts-container');

fetch('https://jsonplaceholder.typicode.com/users/1/posts')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed fetching post by id. Status: ${response.status}, Status text: ${response.statusText}`);
    }
    console.log(response);
    return response.json();
  })

  .then((posts) => {
    posts.forEach(post => {
        const card= document.createElement('div');
        card.className = 'post-card';

        const title = document.createElement('h2');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        card.appendChild(title);
        card.appendChild(body);

        postsContainer.appendChild(card);
    });
    }) 
  .then((json) => console.log(json))
  .catch(error => console.log('Error fetching posts by id!', error));