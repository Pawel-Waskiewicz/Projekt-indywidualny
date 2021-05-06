const hamburgerButton = document.querySelector('.hamburger-btn');

const menu = document.querySelector('.phone-sidebar');

hamburgerButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  console.log('clicked');
  menu.classList.toggle('showMenu');
}

const hamburgerButton2 = document.querySelector('.hamburger-btn-2');

const Menu = document.querySelector('.phone-sidebar');

hamburgerButton2.addEventListener('click', toggleMenu2);

function toggleMenu2() {
  console.log('clicked');
  Menu.classList.toggle('showMenu');
}