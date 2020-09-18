(function getAPI() {
  const API_KEY = "https://api.sheety.co/ee162c5e90f63bb20a911bf71fea2d7c/projectApi/sheet1";
  fetch(API_KEY)
    .then((res) => res.json())
    .then((data) => {
      iterateAPI(data.sheet1);
    });
})();

function iterateAPI(projectsObj) {
  projectsObj.forEach((project) => {
    createProject(project);
  });
}

function createProject(project) {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML += `<div class="card transitions">
    <div class="card__img" style="background-image: url(${project.img})"></div>
  <div class="card__text">
    <div class="card__title">${project.title}</div>
    <div>
      <ul class="card__tools">
        <li>${project.tools}</li>
      </ul>
    </div>
    <div class="card__subtitle">
      <p>${project.description}</p>
    </div>
    <div class="card__btn">
      <a class="btn__demo" href="${project.demoLink}">Demo</a>
      <a class="btn__github" href="${project.githublink}">GitHub</a>
    </div>
  </div>
  <div class="card__raindow"></div>
</div>`;
}
