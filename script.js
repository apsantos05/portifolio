const skillBars = document.querySelectorAll('.skill-fill');

function showSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.classList.contains("html")  ? "90%" :
                        bar.classList.contains("css")   ? "85%" :
                        bar.classList.contains("js")    ? "70%" :
                        bar.classList.contains("react") ? "55%" :
                        bar.classList.contains("git")   ? "65%" : "60%";
    }
  });
}
window.addEventListener('scroll', showSkills);

// MENU HAMBURGER
const hamburger = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu-list");

function fecharMenu() {
  hamburger.classList.remove("ativo");
  menu.classList.remove("menu-ativo");
}

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("ativo");
  menu.classList.toggle("menu-ativo");
});

// Fecha menu ao clicar em qualquer link do menu
document.querySelectorAll('#menu-list a').forEach(link => {
  link.addEventListener('click', fecharMenu);
});

// Fecha menu ao clicar fora dele (mobile)
window.addEventListener('click', function (e) {
  if (window.innerWidth <= 900 && 
      menu.classList.contains("menu-ativo") &&
      !menu.contains(e.target) && 
      !hamburger.contains(e.target)) {
    fecharMenu();
  }
});