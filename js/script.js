$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu, .header__center-block, .header__title').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__menu').click(function () {
        $('.header__burger, .header__menu, .header__center-block, .header__title').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }
    );
});