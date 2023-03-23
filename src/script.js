const button = document.getElementById("create-post");
const containerPosts = document.getElementById("container");

const text = "Esse é o primeiro post utilizando template string";

function handleClickButton() {
  containerPosts.innerHTML += `<div class="container-post">
  <img src="https://picsum.photos/320/200" alt="" />
  <div class="content-post">
    <h3>
      ${text}
    </h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
      tellus, malesuada et velit iblandit molestie dolor.
    </p>
    <small>13/03/2023</small>
    <button>Ler post</button>
  </div>
</div>`;
}

button.addEventListener("click", handleClickButton);
