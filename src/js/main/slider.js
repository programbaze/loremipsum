$(function() {

    $('.js__slider:visible').each(function() {
        var jSlider = $(this);
        jSlider.slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            dotsClass: 'slider__dots'
        });
    });

});

