/* ========= EFEITO DIGITANDO ========= */
const text = "Olá, eu sou o Arthur 👋";
const typingElement = document.getElementById("typing");
let index = 0;

function typeText() {
  typingElement.textContent = text.slice(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(typeText, 110);
  }
}
typeText();

/* ========= MENU MOBILE ========= */
const btnMenu = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu-list");

btnMenu?.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnMenu.classList.toggle("open");
});

/* ========= SCROLL SUAVE ========= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ========= BOTÃO VOLTAR AO TOPO ========= */
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) btnTopo.classList.add("show");
  else btnTopo.classList.remove("show");
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ========= ANIMAÇÃO SKILLS ========= */
const skillsBars = document.querySelectorAll(".skill-fill");

function animateBars() {
  const trigger = window.innerHeight - 80;

  skillsBars.forEach(bar => {
    const isVisible = bar.getBoundingClientRect().top < trigger;
    if (isVisible) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
}

window.addEventListener("scroll", animateBars);
window.addEventListener("load", animateBars);
