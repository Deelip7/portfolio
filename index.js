let themeSwitch = document.querySelector("#theme-switch");

themeSwitch.addEventListener("click", (e) => {
  if (e.target.innerText === "🌙") {
    getPreference("dark");
  } else if (e.target.innerText === "☀️") {
    getPreference("light");
  }
});

(function () {
  const savedTheme = localStorage.getItem("theme");
  if (localStorage.length === 0) {
    getPreference("light");
  } else {
    getPreference(savedTheme);
  }
})();

function getPreference(mode) {
  localStorage.setItem("theme", mode);
  const theme = localStorage.getItem("theme");
  setPreference(theme);
  logoTransition(theme);
}

function setPreference(theme) {
  if (theme === "light") {
    themeSwitch.innerText = "🌙";
    document.body.className = theme;
  } else {
    themeSwitch.innerText = "☀️";
    document.body.className = theme;
  }
}

function logoTransition(theme) {
  const logoTheme = document.querySelectorAll(".navbar__logo")[1];
  console.log(theme);
  if (theme === "dark") {
    logoTheme.classList.remove("hidden");
  } else {
    logoTheme.classList.add("hidden");
  }
}
