var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headerLogo = document.querySelector('page-header__logo');

navMain.classList.remove('main-nav--nojs');

function changeNavMain() {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
}

function changeHeaderLogo() {
  headerLogo.classList.toggle('page-header__logo--closed');
  headerLogo.classList.toggle('page-header__logo--opened');
}

navToggle.addEventListener('click', () => {
  changeNavMain();
  changeHeaderLogo();
});
