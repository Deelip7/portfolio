let themeSwitch = document.querySelector("#theme-switch");
let set = document.documentElement.style;
let remove = document.documentElement.style;

themeSwitch.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
  e.target.innerText === "🌙" ? (themeSwitch.innerText = "☀️") : (themeSwitch.innerText = "🌙");
});
