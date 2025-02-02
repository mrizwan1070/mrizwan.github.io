jQuery(document).ready(function () {
    //star rating bars
    var totalRating = $('#total-rating').text();
    console.log(totalRating);
    $('.rate-bar').each(function(){
        var rating = $(this).attr('total-stars');
        $(this).find('span').css('width', (rating/totalRating)*100 + '%');
    });

    var userSide = $('.mobile-sidebar');
    $('#mobileNumber').on('keypress', function(e) {
        if(e.which == 13) { // 13 is the Enter key
            $('#getOTP').click();
        }
    });

    $('#verifyCode').on('keypress', function(e) {
        if(e.which == 13) { // 13 is the Enter key
            $('#verifyOTP').click();
        }
    });

    $(".cb-status.cb-fill, .wallet-status.cb-fill").parents(".col, .cb-progress > div > div").prevAll().find(".cb-status, .wallet-status").addClass("cb-fill");
    $("#addBnkAcc").click(function(){
        $("#addAccount").removeClass("d-none");
    });
    $("#addBankClose").click(function(e){
        $("#addAccount").addClass("d-none");
    });
    $('#viewAllTrasacHis').on('click', function(){
        console.log("clicked")
        $('#nav-dashboard').removeClass('active');
        $('#nav-cbHistory').addClass('active');
        $('#nav-cbHistory').parents('li').find('.dropdown-toggle').addClass('active');
        console.log("clicked")
    });
    $('.user-setting li a[data-bs-toggle="tab"], #viewAllTrasacHis').on('click', function(event) {
        $('.mobile-sidebar').removeClass('show-sidebar');
        if ($(window).width() <= 767){
        $('.sidebar-outer').css({'display': 'none', 'opcaity': "0"});
        };
        $('body').css('overflow', 'auto');
        // Remove 'active' class from all tab panes
        $('.tab-content .tab-pane').removeClass('show active');
        $('.dropdown-toggle').removeClass('active');
        $(this).parents('li').find('.dropdown-toggle').addClass('active');
        // Get the target tab pane
        var targetPaneId = $(this).data('bs-target');
        var targetPane = $(targetPaneId);
    
        // Add 'active' class to the target tab pane
        targetPane.addClass('show active');
    });
    $(".addFavIcons").on('click', function(){
        $(this).find(".addFavCode i").toggleClass("fa-solid text-danger");
    });
    $("#sideCloseBtn").on('click', function(){
        userSide.removeClass('show-sidebar');
        $('.sidebar-outer').css({'display': 'none', 'opcaity': "0"});
        $('body').css('overflow', 'auto');
    });
    $(".showSideBarBtn").on('click', function(){
        userSide.addClass('show-sidebar');
        $('.sidebar-outer').css({'display': 'block', 'opacity': '1'});
        $('body').css('overflow', 'hidden');
    });
    $(window).resize(function(){
        if (window.innerWidth > 767) {
            $('.sidebar-outer').css({'display': 'block', 'opacity': '1'});
        } else {
            $('.sidebar-outer').css({'display': 'none', 'opacity': '0'});
        }
    });
    $('#getOTP').on('click', function(){
        $('#verification').css('display', 'block');
    });
    $('#verification').on('click', function(){
        $('#userRegister').css('display', 'block');
    });
    $("#closegetApp").click(function (){
        $("#getApps").addClass("d-none");
    })
    var isArabic = $('html').attr('lang') === 'ar';
    console.log(isArabic);

$('.brand-slider').owlCarousel({
    items:10,
    loop:true,
    margin:1,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed: 2000,
    slideTransition: 'linear',
    autoplayHoverPause:true,
     rtl: isArabic,
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
            items: 3
        }
    }
});
$('.category-cards').owlCarousel({
    items: 7,
    margin:1,
    variableWidth: true,
    nav: true,
    slideTransition: 'linear',
    autoplayHoverPause:true,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive : {
        0 : {
            items : 2
        },
        480 : {
            items : 3
        },
        600 : {
            items : 4
        },
        768 : {
            items : 5
        },
        992 : {
            items : 7
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
