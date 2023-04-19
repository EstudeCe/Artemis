const button = document.getElementById("create-post");
const containerPosts = document.getElementById("container");
const overlay = document.getElementById("overlay");
const title = document.getElementById("title");
const description = document.getElementById("description");

const posts = [];

function handleAddPost() {
  const post = createPost(
    Math.random(),
    "https://picsum.photos/320/200",
    title.value,
    description.value
  );

  if (!title.value || !description.value) {
    alert("Você precisa preencher os campos!!");
    return;
  }

  if (posts.length === 3) {
    alert("Você não pode adicionar mais do que 3 posts!");
    return;
  }

  posts.push(post);

  addPost();

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
  // const postsFormated = posts.map((post) => {
  //   return createPost(post.id, post.image, post.title, post.description);
  // });

  containerPosts.innerHTML = posts;
}

function handleOpenModal() {
  overlay.style.display = "flex";
}

function handleCloseModal() {
  overlay.style.display = "none";
  title.value = "";
  description.value = "";
}

async function loadPosts() {
  const title = await fetch(
    "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
  )
    .then((response) => response.json())
    .then((parsed) => parsed[0]);

  const description = await fetch(
    "https://baconipsum.com/api/?type=all-meat&paras=1"
  )
    .then((response) => response.json())
    .then((parsed) => parsed[0]);

  const post = createPost(
    Math.random(),
    "https://picsum.photos/320/200",
    title,
    description
  );

  posts.push(post);

  addPost();
}

button.addEventListener("click", handleOpenModal);

loadPosts();
