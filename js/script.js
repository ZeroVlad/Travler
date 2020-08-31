//Main script
const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.drop-menu');
const menuLinks = document.querySelectorAll('.drop-menu a');

window.onload = () => {
	document.body.classList.add('loaded');
}

menuBtn.onclick = () => {
	menuIcon.classList.toggle('active');
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	if (menu.classList.contains('active')) {
		document.body.style.overflow='hidden';
	}
	else{
		document.body.style.overflow='visible';
	}
}

for (let index = 0; index < menuLinks.length; index++) {
	let menuLink = menuLinks[index];
	menuLink.addEventListener('click', () => {
		menuIcon.classList.toggle('active');
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		if (menu.classList.contains('active')) {
			document.body.style.overflow='hidden';
		}
		else{
			document.body.style.overflow='visible';
		}
	});
}

//slider script
$(document).ready(function() {
  $('.slider').slick({
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });
});

// wow animation initialization
new WOW().init();