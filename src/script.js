const button = document.getElementById("create-post");
const containerPosts = document.getElementById("container");

const posts = [
  {
    id: Math.floor(Math.random() * 1000),
    title: "Post sobre a importancia do treinamento de força",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erostellus, malesuada et velit iblandit molestie dolor.",
    image: "https://picsum.photos/320/200",
  },
];

const text = "Esse é o primeiro post utilizando template string";

function handleClickButton() {
  const post = createPost(
    Math.random(),
    "https://picsum.photos/320/200",
    "",
    ""
  );

  containerPosts.innerHTML += post;
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

addPost();

button.addEventListener("click", handleClickButton);
