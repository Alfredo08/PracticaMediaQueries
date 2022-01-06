const hamburger = document.querySelectorAll('.hamburger')[0];
const menu = document.querySelectorAll('.menu')[0];
const animateClass = 'animate-right-to-left';

// "Abrir" y "Cerrar" sidemenu
hamburger.addEventListener('click', () => {
    menu.classList.contains(animateClass)
    ? menu.classList.remove(animateClass)
    : menu.classList.add(animateClass);
});