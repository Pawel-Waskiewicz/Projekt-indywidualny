const hamburgerButton = document.querySelector('.hamburger-btn');

const menu = document.querySelector('.main-menu-container');

hamburgerButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  console.log('clicked');
  menu.classList.toggle('showMenu');
}