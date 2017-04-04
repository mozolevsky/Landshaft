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
    menuButton.classList.toggle('about-us__nav-open_active');
});


/*popups handler*/

var phonesOpen = document.querySelector('.header__phones-icon');
var phonesBlock = document.querySelector('.header__contacts-main-block');
var telOrder = document.querySelectorAll('.popup__order-tel');
var popupsClose = document.querySelectorAll('.popup__close');
var fadeBlock = document.querySelector('.fade-block');
var thankYouPopup = document.querySelector('.popup__thank-you');
var callMePopup = document.querySelector('.popup__call-me');
var callMeInput = document.querySelector('#popup__input');
var notWorkPopup = document.querySelector('.popup__not-work');
var sendTel = document.querySelector('.popup__send-tel');

var showElement = function(elem) {
    elem.classList.add('visible');
};

var toggleElement = function(elem) {
    elem.classList.toggle('visible');
};

var hideElement = function(elem) {
    elem.classList.remove('visible');
};

var hidePopup = function (event) {
    hideElement(event.target.parentElement);
    hideElement(fadeBlock);
};

for (var i = 0; i < popupsClose.length; i++) {
    popupsClose[i].addEventListener('click', hidePopup);

    popupsClose[i].addEventListener('keydown', function (event) {
        if(window.keyCodeHandler.isActivateEvent(event)) {
            hidePopup();
        }
    });
};

var popupsHander = function () {
    for (var i = 0; i < telOrder.length; i++) {

        telOrder[i].addEventListener('click', function () {
            window.scrollTo(0,0);
            hideElement(this.parentElement);
            showElement(fadeBlock);
            showElement(callMePopup);

            sendTel.addEventListener('click', function () {
                callMeInput.onfocus = function () {
                    callMeInput.classList.remove('popup__input-not-filled');
                };

                if (callMeInput.value) {
                    hideElement(callMePopup);
                    showElement(thankYouPopup);
                };
                if (!callMeInput.value){
                    callMeInput.classList.add('popup__input-not-filled');
                };
            })
        });
    };
};

phonesOpen.addEventListener('click', function () {
    showElement(phonesBlock);
    popupsHander();
});

popupsHander();

var menu = document.querySelectorAll('.about-us__nav-item');
var innerMenu = document.querySelectorAll('.about-us__inner-menu');

for (var i = 0; i <  menu.length; i++) {
    menu[i].addEventListener('click', function () {
        for (var j = 0; j < innerMenu.length; j++) {
            toggleElement(innerMenu[j]);
        };
    });
};


/*inputmask*/

$(document).ready(function(){
    $("#popup__input").inputmask("+7 (999) 999-99-99");  //static mask
});





