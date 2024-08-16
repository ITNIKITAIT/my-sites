import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let $lgSwiper = document.getElementById('lg-swipper');
const swiper = new Swiper('.swiper', {
    // other parameters
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Init lightGallery ince swiper is initilized
    on: {
        init: function () {
            const lg = lightGallery($lgSwiper);

            // Before closing lightGallery, make sure swiper slide
            // is aligned with the lightGallery active slide
            $lgSwiper.addEventListener('lgBeforeClose', () => {
                swiper.slideTo(lg.index, 0);
            });
        },
    },
});
