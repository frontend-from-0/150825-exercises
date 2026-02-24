const body = document.querySelector("body");
body.classList.add("bg-gray-50");
const container = document.getElementById("container");
container.className = "text-lg mx-auto max-w-5xl p-8";

const heading = document.createElement("h1");
heading.textContent = "APIs Information";
heading.className = "text-2xl font-bold text-center mb-6";
container.appendChild(heading);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed fetching post by id. Status: ${response.status}, Status text: ${response.statusText}`,
      );
    }
    console.log(response);
    return response.json();
  })
  .then((posts) => {
    const button = document.getElementById("button");
    button.addEventListener("click", () => {
      getData();
    });
    button.className =
      "block mx-auto bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300";

    function getData() {
      button.disabled = true;
      button.textContent = "Loading...";

      posts.forEach((post) => {
        const postCard = document.createElement("article");
        postCard.className = "bg-white p-4 shadow border-b border-gray-300 ";

        const idElement = document.createElement("p");
        idElement.textContent = `Post ID: ${post.id}`;
        postCard.appendChild(idElement);

        const title = document.createElement("h2");
        title.textContent = `Title: ${post.title}`;
        title.className = "text-lg font-bold";

        const body = document.createElement("p");
        body.textContent = post.body;

        postCard.appendChild(title);
        postCard.appendChild(body);
        container.appendChild(postCard);
      });
      button.classList.add("hidden");
      console.log(posts);
    }
  })
  .catch((error) => {
    console.log("Error fetching posts by id!", error);
    button.disabled = false;
    button.textContent = "Try Again";
  });
