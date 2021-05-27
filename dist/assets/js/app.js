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
        },
        fixedHeader() {
            const header = $('.page__header');
            const headerHeight = header.outerHeight();

            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $(document.body).css('padding-top', headerHeight + 'px');
                    header.addClass('page__header--fixed');
                } else {
                    header.removeClass('page__header--fixed');
                    $(document.body).attr('style', '');
                }
            });

            $(window).on('load', function () {
                if (header.offset().top > 50) {
                    $(document.body).css('padding-top', headerHeight + 'px');
                    header.addClass('page__header--fixed');
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



