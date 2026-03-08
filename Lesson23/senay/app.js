const container = document.getElementById("container");
container.className = "text-lg mx-auto max-w-5xl p-8";

const button = document.getElementById("button");
button.className =
  "block mx-auto bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300";

const heading = document.createElement("h1");
heading.textContent = "APIs Information";
heading.className = "text-2xl font-bold text-center mb-6";
container.appendChild(heading);

function getData(posts, button) {
  button.disabled = true;
  button.textContent = "Loading...";

  posts.forEach((post) => {
    const postCard = document.createElement("article");
    postCard.className = "bg-white p-4 mb-4 shadow border-b border-gray-300 ";

    const idElement = document.createElement("p");
    idElement.textContent = `Post ID: ${post.id}`;
    postCard.appendChild(idElement);

    const title = document.createElement("h2");
    title.textContent = `Title: ${post.title}`;
    title.className = "text-lg font-bold";

    const postBodyElement = document.createElement("p");
    postBodyElement.textContent = post.body;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className =
      "bg-red-500 text-white px-3 py-1 mt-4 rounded text-ml hover:bg-red-700 transition";

    deleteBtn.addEventListener("click", () => {
      postCard.remove();
    });

    postCard.append(idElement, title, postBodyElement, deleteBtn);
    container.appendChild(postCard);
  });
  button.classList.add("hidden");
  console.log(posts);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed fetching posts. Status: ${response.status}, Status text: ${response.statusText}`,
      );
    }
    console.log(response);
    return response.json();
  })
  .then((posts) => {
    button.addEventListener("click", () => {
      getData(posts, button);
    });
  })
  .catch((error) => {
    console.log("Failed fetching posts!", error);

    button.disabled = false;
    button.textContent = "Try Again";
    button.className =
      "block mx-auto bg-gray-500 text-white px-6 py-3 rounded-lg";
  });
