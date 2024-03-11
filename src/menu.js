let hamburger = document.getElementById("menu-open");

let closeMenu = document.getElementById("menu-close");

hamburger.addEventListener("click", toggleMenu);

closeMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}
