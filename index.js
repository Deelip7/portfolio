let themeSwitch = document.querySelector("#theme-switch");
let set = document.documentElement.style;
let remove = document.documentElement.style;

themeSwitch.addEventListener("click", (e) => {
  logoTransition();
  document.body.classList.toggle("dark");
  e.target.innerText === "🌙" ? (themeSwitch.innerText = "☀️") : (themeSwitch.innerText = "🌙");
});

function logoTransition() {
  document.querySelectorAll(".navbar__logo").forEach((e) => {
    e.classList.toggle("hidden");
  });
}
