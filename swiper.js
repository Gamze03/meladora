
const bannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        700: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});



const swiperGarden = new Swiper(" .swiper-garden", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        700: {
            slidesPerView: 3,
            spaceBetween: 40,

        },

    }
});

const swiperGallery = new Swiper(" .swiper-gallery", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: " .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        700: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});


var productswiper = new Swiper(".swiper-gallery", {
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



const swiperBlogs = new Swiper(" .swiper-blogs", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: " .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        700: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});