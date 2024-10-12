$(document).ready(function (params) {
    $('.pop-up').magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
      // Projects Filter

   // Projects Filter

    // init Isotope
    var $grid = $('.project-items').isotope({
     
    });
    // filter items on button click
    $('.projects-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    $('.projects-menu').on( 'click', 'li', function() {
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    })
});
    
    