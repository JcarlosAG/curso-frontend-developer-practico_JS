const navbar_email = document.querySelector('.navbar-email');
const menuEmail = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobMenu = document.querySelector('.mobile-menu');

navbar_email.addEventListener('click', toggleMenu);
burgerMenu.addEventListener('click', toggleMblmenu);

function toggleMenu() {
    menuEmail.classList.toggle('inactive');
}

function toggleMblmenu() {
    mobMenu.classList.toggle('inactive');
}