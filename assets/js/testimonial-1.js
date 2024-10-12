$(document).ready(function() {
    $('.testimonial').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      loop: true,
      autoplay: true,
      prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',


    });
});