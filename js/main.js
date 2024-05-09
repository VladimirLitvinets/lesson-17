const navToggle = document.querySelector('#js-nav-toggle');
const nav = document.querySelector('#js-nav');
const documentBody = document.body;
const navOverlay = document.querySelector('#js-nav-overlay');
const navItems = document.querySelectorAll('.js-nav-link');
const sections = document.querySelectorAll('.section[id]');

navToggle.addEventListener('click', toggleNav);

navOverlay.addEventListener('click', toggleNav);

navItems.forEach((element) => {
	element.addEventListener('click', toggleNav);
});

function toggleNav() {
	nav.classList.toggle('menu_active');
	documentBody.classList.toggle('no-scroll');
}


const observer = new IntersectionObserver((entries) => {
	entries.forEach((entrie) => {
		const entrieElement = entrie.target;
		const id = entrieElement.id;
		const navElement = document.querySelector(`.menu__link[href="#${id}"]`);

		if (entrie.isIntersecting) {
			navElement.classList.add('menu__link_active');
		} else {
			navElement.classList.remove('menu__link_active');
		}

	})
}, { root: document, rootMargin: "-50% 0px" });


sections.forEach((section) => {
	observer.observe(section);
});

