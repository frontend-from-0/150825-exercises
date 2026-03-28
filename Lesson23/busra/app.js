const headerElement = document.querySelector("header");
const postsContainer = document.getElementById("posts-container");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "All Posts";
pageTitle.classList.add("page-title");

headerElement.appendChild(pageTitle);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed fetching post. Status: ${response.status}, Status text: ${response.statusText}`,
      );
    }
    console.log(response);
    return response.json();
  })

  .then((posts) => {
    posts.forEach((post) => {
      const postBox = document.createElement("div");
      postBox.classList.add("post-box");

      const userIdSpan = document.createElement("span");
      userIdSpan.textContent = `User ID: ${post.userId}`;
      userIdSpan.classList.add("id-span");

      const postIdSpan = document.createElement("span");
      postIdSpan.textContent = `Post ID: ${post.id}`;
      postIdSpan.classList.add("id-span");

      const postTitle = document.createElement("h2");
      postTitle.textContent = post.title;
      postTitle.classList.add("post-title");

      const postDescription = document.createElement("p");
      postDescription.textContent = post.body;
      postDescription.classList.add("post-description");

      postBox.appendChild(userIdSpan);
      postBox.appendChild(postIdSpan);
      postBox.appendChild(postTitle);
      postBox.appendChild(postDescription);

      postsContainer.appendChild(postBox);
    });
  })

  .catch((error) => console.log("Error fetching posts.", error));
