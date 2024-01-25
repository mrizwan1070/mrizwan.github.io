jQuery(document).ready(function () {
 // brand slider
 $('.brand-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    pauseOnFocus: false, 
    pauseOnHover: true,
    cssEase: 'linear'
});
$('.category-cards').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 13000,
    pauseOnFocus: false, 
    pauseOnHover: true,
    cssEase: 'linear',
    arrows: false
});
});
