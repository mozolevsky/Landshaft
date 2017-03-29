<!-- Initialize Swipers -->
var topSwiper = new Swiper('.slider', {
    nextButton: '.slider__control-next',
    prevButton: '.slider__control-prev',
    pagination: '.pagination-white',
    paginationClickable: true,
    keyboardControl: true
});

var projectsSwiper = new Swiper('.projectsSlider', {
    nextButton: '.projects__pagination-next',
    prevButton: '.projects__pagination-prev',
    paginationClickable: true,
    keyboardControl: true
});

var clientsSwiper = new Swiper('.clients-slider', {
    pagination: '.clients__pagination',
    paginationClickable: true,
    keyboardControl: true,
    // Default parameters
    slidesPerView: 4,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 2,
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 3,
        },
        // when window width is <= 768px
        1200: {
            slidesPerView: 4,
        },
        // when window width is <= 768px
        1920: {
            slidesPerView: 6,
        }
    }
});

var publicSwiper = new Swiper('.public__slider', {
    nextButton: '.public__next',
    pagination: '.public__pagination',
    paginationClickable: true,
    keyboardControl: true
});


var menuButton = document.querySelector('.about-us__nav-open');
var menuMobile = document.querySelector('.about-us__nav');

menuButton.addEventListener('click', function () {
    menuMobile.classList.toggle('about-us__nav_active');
});