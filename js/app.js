
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

const nav = document.querySelector('.header__links')
const abrir = document.querySelector('.abrirMenu')
const cerrar = document.querySelector('.cerrarMenu')
const link = document.querySelector('.header__link')

abrir.addEventListener('click', () => {
  nav.classList.remove('invisible')
})

link.addEventListener('click', () => {
  nav.classList.remove('invisible')
  nav.classList.add('invisible')
})

cerrar.addEventListener('click', () => {
  nav.classList.add('invisible')
})