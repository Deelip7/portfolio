let themeSwitch = document.querySelector("#theme-switch");
let set = document.documentElement.style;
let remove = document.documentElement.style;

themeSwitch.addEventListener("click", (e) => {
  if (e.target.innerText === "🌙") {
    /*------- dark theme -------*/
    themeSwitch.innerText = "☀️";
    set.setProperty("--light-bg-color", "#0b1d2a");
    set.setProperty("--light-btn-color", "#e9e9e9");
    set.setProperty("--light-subtext-color", "#fafafa");
    set.setProperty("--light-header-color", "#fafafa");
    set.setProperty("--btn-hover-color", "#fafafa");
    set.setProperty("--btn-border-color", "1px solid #fafafa");
    set.setProperty("--box-shadow", "0 2px 44px 0 rgba(0, 0, 0, 0.475)");
    set.setProperty("--icon-shadow", "drop-shadow(1px 6px 44px 0 rgba(0, 0, 0))");
  } else if (e.target.innerText === "☀️") {
    themeSwitch.innerText = "🌙";
    remove.removeProperty("--light-bg-color", "#fafafa");
    remove.removeProperty("--light-btn-color", "#fafafa");
    remove.removeProperty("--light-subtext-color", "#fafafa");
    remove.removeProperty("--light-header-color", "#fafafa");
    remove.setProperty("--btn-hover-color", "#333");
    remove.setProperty("--btn-border-color", "1px solid #86868681");
  }
});
