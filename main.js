const hamburger = document.querySelector(".navbar-hamburger");
const nav = document.querySelector(".navbar-nav");

function toggleMenu(e) {
  nav.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
