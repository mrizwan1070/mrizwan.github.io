$(document).ready(function (){
    AOS.init();
    $('.navbar-nav .nav-item').on('click', function () {
        $('.navbar-nav .nav-item').removeClass('active'); // Remove active class from all links
        $(this).addClass('active'); // Add active class to the clicked link
      });
      $('.navbar-nav .nav-item .nav-link').on('click', function (event) {
        event.preventDefault(); // Prevent the URL from updating
        const target = $($(this).attr('href'));
    
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 200); // Adjust duration as needed
        }
      });
});