const button = document.getElementById("create-post");
const containerPosts = document.getElementById("container");
const overlay = document.getElementById("overlay");
const title = document.getElementById("title");
const description = document.getElementById("description");

const posts = [
  {
    id: Math.floor(Math.random() * 1000),
    title: "Post sobre a importancia do treinamento de força",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erostellus, malesuada et velit iblandit molestie dolor.",
    image: "https://picsum.photos/320/200",
  },
];

function handleAddPost() {
  const post = createPost(
    Math.random(),
    "https://picsum.photos/320/200",
    title.value,
    description.value
  );

  containerPosts.innerHTML += post;
  handleCloseModal();
}

function createPost(id, image, title, description) {
  const post = `<div class="container-post" id="${id}" >
  <img src="${image}" alt="" />
  <div class="content-post">
    <h3>
      ${title}
    </h3>
    <p>
      ${description}
    </p>
    <small>13/03/2023</small>
    <button>Ler post</button>
  </div>
</div>`;

  return post;
}

function addPost() {
  const postsFormated = posts.map((post) => {
    return createPost(post.id, post.image, post.title, post.description);
  });

  containerPosts.innerHTML = postsFormated;
}

function handleOpenModal() {
  overlay.style.display = "flex";
}

function handleCloseModal() {
  overlay.style.display = "none";
  title.value = "";
  description.value = "";
}

addPost();

button.addEventListener("click", handleOpenModal);

function first() {
  console.log("first");
}

function second() {
  console.log("second");
}

function third() {
  console.log("third");
}

first();
setTimeout(second, 1000);
third();
