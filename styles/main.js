const hamburgerMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('visible');
});