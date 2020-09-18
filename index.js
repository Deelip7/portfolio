let themeSwitch = document.querySelector("#theme-switch");

(function () {
  const savedTheme = localStorage.getItem("theme");
  if (localStorage.length === 0) {
    getPreference("light");
  } else {
    getPreference(savedTheme);
  }
})();

themeSwitch.addEventListener("click", (e) => {
  if (e.target.innerText === "🌙") {
    getPreference("dark");
  } else if (e.target.innerText === "☀️") {
    getPreference("light");
  }
});

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
  const logoTheme1 = document.querySelectorAll(".navbar__logo")[0];
  const logoTheme2 = document.querySelectorAll(".navbar__logo")[1];
  if (theme === "dark") {
    logoTheme1.classList.add("hidden");
    logoTheme2.classList.remove("hidden");
  } else {
    logoTheme1.classList.remove("hidden");
    logoTheme2.classList.add("hidden");
  }
}
