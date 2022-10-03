jQuery(document).ready(function () {
    var $ = jQuery;

    $(document).on("click", "#sidebarprd-next", function () {
        $("#carouselhomesidebar").carousel("next");
    });

    $(document).on("click", "#sidebarprd-prev", function () {
        $("#carouselhomesidebar").carousel("prev");
    });
    $("#grid").click(function(){
        $("#products .row > div").addClass("listing-group");
        $("#grid").addClass("active");
        $("#list").removeClass("active");
    })
    $("#list").click(function(){
        $("#products .row > div").removeClass("listing-group");
        $("#grid").removeClass("active");
        $("#list").addClass("active");
    })
});

$(document).on("click", ".change_country", function (e) {
    var _token = $('meta[name="csrf-token"]').attr("content");
    var data = {
        country_id: this.id,
        _token: _token,
    };

    $.ajax({
        type: "POST",
        url: "/changecountry",
        data: data,
        success: function (data_response) {
            setTimeout(function () {
                window.location.reload();
            }, 1);
            // if (data_response == "success") {
            //
            // }
        },
        complete: function (data_response) {},
    });
});

$(document).on("submit", "#top_search_form", function (e) {
    e.preventDefault();
    var form = $(this).serialize();
    console.log(form);
});