document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1500,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-nav__next',
			prevEl: '.showcase-nav__prev'
		}
	})

	const video = document.querySelector('video');
	video.playbackRate = 2;

})