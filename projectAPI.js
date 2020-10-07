(function getAPI() {
  var _0xbf34 = [
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x73\x68\x65\x65\x74\x79\x2E\x63\x6F\x2F\x65\x65\x31\x36\x32\x63\x35\x65\x39\x30\x66\x36\x33\x62\x62\x32\x30\x61\x39\x31\x31\x62\x66\x37\x31\x66\x65\x61\x32\x64\x37\x63\x2F\x70\x72\x6F\x6A\x65\x63\x74\x41\x70\x69\x2F\x73\x68\x65\x65\x74\x31",
  ];
  _0xbf34[0];

  const API_KEY = _0xbf34[0];
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
