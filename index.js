let themeSwitch = document.querySelector("#theme-switch");
let set = document.documentElement.style;
let remove = document.documentElement.style;

themeSwitch.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");

  if (e.target.innerText === "🌙") {
    themeSwitch.innerText = "☀️";
    document.querySelector(".navbar__logo").src = "assets/iconsHex/nav-logo-dark.png";
  } else {
    themeSwitch.innerText = "🌙";
    document.querySelector(".navbar__logo").src = "assets/iconsHex/nav-logo.png";
  }
});
