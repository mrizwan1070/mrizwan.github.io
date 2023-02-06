$(document).ready(function(){
    $("#search-close").click(function(){
        $(".main-search-box").addClass("d-none").removeClass("d-flex");
    });
    $(".search-icon").click(function(){
        $(".main-search-box").addClass("d-flex").removeClass("d-none");
        $(".main-search-inner input").focus();
    });
});
