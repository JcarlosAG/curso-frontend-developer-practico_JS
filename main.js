const navbar_email = document.querySelector('.navbar-email');
const menuEmail = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuEmail.classList.toggle('inactive');
}