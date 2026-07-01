// ============================================
// GV ÓPTICA — script.js
// ============================================

// --- Slider principal (banner) ---
let count = 1;
const radioSlider = document.getElementById("radio1");
if (radioSlider) radioSlider.checked = true;

setInterval(function () {
  nextImage();
}, 4000);

function nextImage() {
  count++;
  if (count > 4) count = 1;
  const el = document.getElementById("radio" + count);
  if (el) el.checked = true;
}

// --- Slider de categorias ---
let count2 = 1;
const radioCategoria = document.getElementById("radio1c");
if (radioCategoria) radioCategoria.checked = true;

setInterval(function () {
  nextImageCategorias();
}, 4000);

function nextImageCategorias() {
  count2++;
  if (count2 > 2) count2 = 1;
  const el = document.getElementById("radio" + count2 + "c");
  if (el) el.checked = true;
}

// --- Menu mobile (hambúrguer) ---
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('[data-action="toggle-menu"]');
  const nav = document.querySelector(".header__desktop-nav");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });

    // Fecha o menu ao clicar em um link (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  // --- Setas manuais do slider principal ---
  const arrows = document.querySelectorAll('.slide-arrow[data-slider="main"]');
  const totalSlides = 4;

  arrows.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const dir = btn.getAttribute("data-dir");
      if (dir === "next") {
        count++;
        if (count > totalSlides) count = 1;
      } else {
        count--;
        if (count < 1) count = totalSlides;
      }
      const el = document.getElementById("radio" + count);
      if (el) el.checked = true;
    });
  });
});
