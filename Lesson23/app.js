const postsContainer = document.querySelector(".posts-container");
const searchInput = document.querySelector(".search-input");

fetch("https://jsonplaceholder.typicode.com/users/1/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed fetching post by id. Status: ${response.status}, Status text: ${response.statusText}`,
      );
    }
    console.log(response);
    return response.json();
  })
  .then((json) => {
    json.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.classList.add("post-card");

      const title = document.createElement("h2");
      title.textContent = post.title;

      const content = document.createElement("p");
      content.textContent = post.body;

      postCard.appendChild(title);
      postCard.appendChild(content);

      postsContainer.appendChild(postCard);
    });
  })
  .catch((error) => console.log("Error fetching posts by id!", error));

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const allCards = document.querySelectorAll(".post-card");

  allCards.forEach((card) => {
    const cardContent = card.textContent.toLowerCase();
    if (cardContent.includes(searchTerm)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
