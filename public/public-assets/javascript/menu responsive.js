//MENU HAMBURGUESA

// Selección de elementos del menú
const menu = document.querySelector(".menu-horizontal");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

// Función para alternar la visibilidad del menú
function toggleMenu() {
  menu.classList.toggle("menu_opened");
  if (menu.classList.contains("menu_opened")) {
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
  } else {
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  }
}

// Evento para abrir/cerrar el menú al hacer clic en los botones
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// Ajusta la visibilidad de los botones según el tamaño de la pantalla
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menu.classList.remove("menu_opened");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  } else {
    openMenuBtn.style.display = "block";
  }
});
