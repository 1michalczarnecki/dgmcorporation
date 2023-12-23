const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelectorAll('.nav__link');

allNavItems.forEach((item) =>
	item.addEventListener('click', () =>
		navMobile.classList.remove('nav-mobile--active')
	)
);
allNavItems.forEach((item) =>
	item.addEventListener('click', () => navBtn.classList.remove('is-active'))
);

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

navBtn.addEventListener('click', handleNav);
handleCurrentYear();
