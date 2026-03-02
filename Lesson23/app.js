
fetch('https://jsonplaceholder.typicode.com/users/1/posts')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed fetching post by id. Status: ${response.status}, Status text: ${response.statusText}`);
    }
    console.log(response);
    return response.json();
  })
.then((json) => {
    const container = document.getElementById('post-container');
    json.forEach((post) => {
      postDiv.classList.add('post-card');
      const postDiv = document.createElement('div');
      const titleElement = document.createElement('h3');
      titleElement.textContent = post.title; 
      const bodyElement = document.createElement('p');
      bodyElement.textContent = post.body; 
      postDiv.appendChild(titleElement);
      postDiv.appendChild(bodyElement);
      container.appendChild(postDiv);
    });
  })
  .catch(error => console.log('Error fetching posts by id!', error));