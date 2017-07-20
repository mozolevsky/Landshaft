<!-- Initialize Swipers -->
var topSwiper = new Swiper('.slider', {
    autoplay: 3000,
    loop: true,
    speed: 600,
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

var servicesAdvSwiper = new Swiper('.advantages_slider', {
    pagination: '.advantages__pagination',
    paginationClickable: true,
    keyboardControl: true,
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 1,
        },
        // when window width is <= 768px
        1200: {
            slidesPerView: 3,
        },
        // when window width is <= 768px
        1920: {
            slidesPerView: 4,
        }
    }
});

var bulletNamesGlobal = bulletNamesGlobal ? bulletNamesGlobal : ['Нет названий табов'];
var bulletNamesGlobal2 = bulletNamesGlobal2 ? bulletNamesGlobal2 : ['Нет названий табов'];


var serviceSwiper = new Swiper('.service-slider__container', {
    pagination: '.service-slider__pagination',
    paginationClickable: true,
    bulletActiveClass: 'service-slider__pagination-link_active',
    bulletClass: 'service-slider__pagination-link',
    slidesPerView: 1,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 768px
        767: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: '.service-slider__pagination-bullets',
            bulletClass: 'service-slider__pagination-bullet',
            bulletActiveClass: 'service-slider__pagination-bullet_active',
            paginationBulletRender: function (swiper, index, className) {
                return '<div class="' + className + '"></div>';
            }
        },
        // when window width is <= 991px
        991: {
            slidesPerView: 3,
            spaceBetween: 6
        }},
    bulletNames: bulletNamesGlobal,
    paginationBulletRender: function (swiper, index, className) {
        return '<a href="#"  class="' + className + '">'+ this.bulletNames[index] +'</a>';
    }
});

var serviceSwiper2 = new Swiper('.service-slider2__container', {
    pagination: '.service-slider2__pagination',
    paginationClickable: true,
    bulletActiveClass: 'service-slider__pagination-link_active',
    bulletClass: 'service-slider__pagination-link',
    slidesPerView: 1,
    spaceBetween: 40,
    bulletNames: bulletNamesGlobal2,
    paginationBulletRender: function (swiper, index, className) {
        return '<a href="#"  class="' + className + '">'+ this.bulletNames[index] +'</a>';
    }
});

/* If we click on the block in slider with colors then we go to relevant project in projects slider */
+(function() {
    var chooseColorBlocks = document.querySelectorAll('.service-slider2__slide-part');
    var projectsBlock = document.querySelector('.projects');

    if (chooseColorBlocks && projectsBlock) {
        [].forEach.call(chooseColorBlocks, function(currentBlock){
            currentBlock.addEventListener('click', function(e) {
                e.preventDefault();

                if (this.hasAttribute('data-project')) {
                    var slideIndex = this.getAttribute('data-project');

                    var projectsBlockYCoord = projectsBlock.getBoundingClientRect().top;

                    if (projectsSwiper.slideTo(slideIndex, 700)) {
                        window.scrollTo(0, projectsBlockYCoord + window.pageYOffset);
                        projectsSwiper.slideTo(slideIndex, 700);
                    }
                }
            });
        });
    }

})();


var menuButton = document.querySelector('.about-us__nav-open');
var menuMobile = document.querySelector('.about-us__nav');

menuButton.addEventListener('click', function () {
    menuMobile.classList.toggle('about-us__nav_active');
    menuButton.classList.toggle('about-us__nav-open_active');
    if (menuButton.className.indexOf('about-us__nav-open_active') !== -1) {
        activateSubmenu();
    }
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

var activateSubmenu = function() {
    var menuLinks = document.querySelectorAll('.about-us__nav-item');

    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function (e) {
                if (this.children[1] && window.innerWidth <= 768) {
                    toggleElement(this.children[1]);
                    console.log(this.children[1].className);
                }
        });
    }


};


/*inputmask*/

$(document).ready(function(){
    $("#popup__input").inputmask("+7 (999) 999-99-99");  //static mask
});


var complexSwiper = new Swiper('.complex-slider__container', {
    pagination: '.complex-slider__pagination',
    paginationClickable: true,
    bulletActiveClass: 'complex-slider__pagination-link_active',
    bulletClass: 'complex-slider__pagination-link',
    slidesPerView: 1,
    spaceBetween: 0,
    bulletNames: bulletNamesGlobal,
    paginationBulletRender: function (swiper, index, className) {
        return '<a href="#"  class="' + className + '">'+ this.bulletNames[index] +'</a>';
    },
    noSwipingClass: 'complex-slider__container',
    breakpoints: {
        // when window width is <= 320px
        767: {
            noSwiping: false
        }
    }
});


/* js module complex page, plants block auto-height */

+(function() {
    function makeHeight() {
        var range = function () {
            return window.innerWidth > 768 && window.innerWidth <= 992;
        };

        if (range()) {
            var currentPlantsBlock = document.querySelector('.complex-slider__slide.swiper-slide-active') || '';
            var plantsBlock = currentPlantsBlock.querySelector('.plants');

            if (currentPlantsBlock) {
                var plantsBlockHeight = 0;

                var plantsAmount = plantsBlock.childElementCount;
                if (plantsAmount !==0 && plantsAmount <= 5) {
                    plantsBlockHeight = 145;
                } else if (plantsAmount <= 10) {
                    plantsBlockHeight = 290;
                } else {
                    plantsBlockHeight = 350;
                }

                plantsBlock.style.cssText = 'height:' + plantsBlockHeight + 'px; overflow-y: auto;';
            }
        }
    }
    makeHeight();

    var complexPaginBlock = document.querySelector('.complex-slider__pagination');
    if (complexPaginBlock) {
        complexPaginBlock.addEventListener('click', function(e) {
            makeHeight();
        });
    }
})();

/* auto height for complex slider */
+(function() {
    var sliderContainer = document.querySelector('.complex-slider__container');
    var complexPaginBlock = document.querySelector('.complex-slider__pagination');

    $('.complex-slider__container').css({height: $('.complex-slider__container').find('.swiper-slide-active').height() + 80});

    complexPaginBlock.addEventListener('click', function(){
        //Unset height
        $('.complex-slider__container').css({height:''});
        //Calc Height
        $('.complex-slider__container').css({height: $('.complex-slider__container').find('.swiper-slide-active').height() + 80});
    });
})();

var servicesAdvOrderSwiper = new Swiper('.advantages-order_slider', {
    pagination: '.advantages__pagination',
    paginationClickable: true,
    keyboardControl: true,
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 1,
        },
        // when window width is <= 768px
        1200: {
            slidesPerView: 3,
        },
        // when window width is <= 768px
        1920: {
            slidesPerView: 3,
        }
    }
});