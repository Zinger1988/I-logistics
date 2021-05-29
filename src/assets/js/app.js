$(document).ready(function () {

    // Swiper ---------------------------------------

    const carouselRegular = new Swiper('.carousel-section__swiper', {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            788: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            547: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            }
        }
    });

    $('.carousel-section').each(function () {
        const arrows = $(this).find('.carousel-section__carousel-btn');
        const carousel = $(this).find('.swiper').prop('swiper');

        arrows.click(function () {
            if($(this).hasClass('swiper-next')) {
                carousel.slideNext();
            } else if ($(this).hasClass('swiper-prev')){
                carousel.slidePrev();
            }
        });
    });

    // siteJS ---------------------------------------

    let siteJS = {
        onload: () => {
            siteJS.init();
            window.addEventListener("resize", siteJS.resizeThrottler, false);
        },
        resizeTimeout: null,
        resizeThrottler: function(){
            if ( !siteJS.resizeTimeout ) {
                siteJS.resizeTimeout = setTimeout(function() {
                    siteJS.resizeTimeout = null;
                    siteJS.textBlockOverflow();
                    siteJS.productGrid();
                }, 500);
            }
        },
        init() {
            this.fixedHeader();
            this.typeDisplay();
            this.menu();
        },
        menu(){

            const button = $('.header__menu-btn');
            const menu = $('.header__menu-list');
            const menuTitle = $('.header__menu-title');

            button.click(function () {
                if(window.matchMedia('(max-width: 999px)').matches){
                    $(this).toggleClass('header__menu-btn--active');
                    siteJS.helpers.elemSlideToggle(menu, 'header__menu-list--active');
                }
            })

            menuTitle.click(function () {
                if(window.matchMedia('(max-width: 999px)').matches) {
                    const sublist = $(this).next('.header__menu-sublist');

                    $(this).toggleClass('header__menu-title--active');
                    $('.header__menu-title').not($(this)).removeClass('header__menu-title--active');

                    siteJS.helpers.elemSlideToggle(sublist, 'header__menu-sublist--active');
                    siteJS.helpers.elemSlideUp($('.header__menu-sublist').not(sublist), 'header__menu-sublist--active');
                }
            })

        },
        fixedHeader() {
            const header = $('.header__menu');
            const headerHeight = header.outerHeight();

            $(window).scroll(function () {
                if ($(this).scrollTop() > 350 && window.matchMedia('(min-width: 1000px)').matches) {
                    $('.header').css('padding-bottom', headerHeight + 'px');
                    header.addClass('header__menu--fixed');
                } else {
                    header.removeClass('header__menu--fixed');
                    $('.header').attr('style', '');
                }
            });

            $(window).on('load', function () {
                if (header.offset().top > 350 && window.matchMedia('(min-width: 1000px)').matches) {
                    $('.header').css('padding-bottom', headerHeight + 'px');
                    header.addClass('header__menu--fixed');
                }
            });
        },
        typeDisplay() {
            if ("ontouchstart" in document.documentElement) {
                document.body.classList.add('touch-device');
            } else {
                document.body.classList.add('hover-device');
            }
        },
        helpers: {
            elemSlideUp(elem, removeClass = '', durationTime = 200){
                $(elem).slideUp({
                    duration: durationTime,
                    done: function () {
                        $(this).removeClass(removeClass).attr('style','');
                    }
                });
            },
            elemSlideDown(elem, addClass = '', durationTime = 200){
                $(elem).slideDown({
                    duration: durationTime,
                    done: function () {
                        $(this).addClass(addClass).attr('style','');
                    }
                });
            },
            elemFadeIn(elem, addClass = '', durationTime = 200){
                $(elem).fadeIn({
                    duration: durationTime,
                    done: function () {
                        $(this).addClass(addClass).attr('style','');
                    }
                });
            },
            elemFadeOut(elem, removeClass = '', durationTime = 200){
                $(elem).fadeOut({
                    duration: durationTime,
                    done: function () {
                        $(this).removeClass(removeClass).attr('style','');
                    }
                });
            },
            elemFadeToggle(elem, toggleClass = '', durationTime = 200){
                $(elem).fadeToggle({
                    duration: durationTime,
                    done: function () {
                        $(this).hasClass(toggleClass)?
                            $(this).removeClass(toggleClass):
                            $(this).addClass(toggleClass);
                        $(this).attr('style','');
                    }
                });
            },
            elemSlideToggle(elem, toggleClass = '', durationTime = 200){
                $(elem).slideToggle({
                    duration: durationTime,
                    done: function () {
                        $(this).hasClass(toggleClass)?
                            $(this).removeClass(toggleClass):
                            $(this).addClass(toggleClass);
                        $(this).attr('style','');
                    }
                });
            }
        }
    };

    siteJS.onload();
});



