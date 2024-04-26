const btn = document.querySelector('.menu__btn');
const nav = document.querySelector('.header__container');

btn.addEventListener('click', () => {
	nav.classList.toggle('menu-open')
});

