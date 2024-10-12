$(document).ready(function(){
    $('.banner-parent').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    });
});