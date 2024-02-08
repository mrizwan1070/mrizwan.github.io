jQuery(document).ready(function () {
    //star rating bars
    $('.rating-bar').each(function() {
        // Get the total-stars attribute value
        var totalStars = parseInt($(this).find('.rate-bar').attr('total-stars'));

        // Calculate the width for the rating bar
        var widthPercentage = (totalStars / 100) * 100; // Assuming the maximum value is 100

        // Set the width using CSS
        $(this).find('.rate-bar').css('width', totalStars + '%');
    });
    $(".cb-status.cb-fill, .wallet-status.cb-fill").parents(".col").prevAll().find(".cb-status, .wallet-status").addClass("cb-fill");
 // brand slider
//  $('.brand-slider').slick({
//     slidesToShow: 10,
//     slidesToScroll: 1,
//     autoplay: true,
//     infinite: true,
//     draggable: true,
//     autoplaySpeed: 0,
//     speed: 1000,
//     pauseOnFocus: false, 
//     pauseOnHover: true,
//     cssEase: 'linear',
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 5,
//             infinite: true,
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 3,
//             infinite: true,
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 2,
//             infinite: true,
//           }
//         }
//     ]
// });
// $('.category-cards').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     draggable: true,
//     autoplaySpeed: 0,
//     speed: 13000,
//     pauseOnFocus: false, 
//     pauseOnHover: true,
//     cssEase: 'linear',
//     arrows: false,
//     responsive: [
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             infinite: true,
//           }
//         },
//         // {
//         //   breakpoint: 480,
//         //   settings: {
//         //     slidesToShow: 2,
//         //     infinite: true,
//         //   }
//         // }
//     ]
// });
$('.brand-slider').owlCarousel({
    items:10,
    loop:true,
    margin:1,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed: 2000,
    slideTransition: 'linear',
    autoplayHoverPause:true,
    responsive:{
        1200 : {
            items: 10 
        },
        800 : {
            items: 8 
        },
        768 : {
            items: 7 
        },
        576 : {
            items: 5 
        },
        480 : {
            items: 4 
        },
        0 : {
            items: 2
        }
    }
});
$('.category-cards').owlCarousel({
    items:3,
    loop:true,
    margin:1,
    autoplay:true,
    slideTransition: 'linear',
    autoplayTimeout:10000,
    autoplaySpeed: 10000,
    autoplayHoverPause:true,
    responsive : {
        0 : {
            items : 1
        },
        480 : {
            items : 2
        }
    }
});
$('.power-cb-cards').owlCarousel({
    items:3,
    loop:true,
    margin:1,
    nav: true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items: 1
        },
        576:{
            items: 2
        },
       900: {
        items: 3
       }
    }
});
});
