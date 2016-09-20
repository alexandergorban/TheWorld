/* site.js */

(function () {
    $('#username').text("ASP.NET Core");

    //$('#main').hover(function () {
    //    $(this).on('mouseenter', function () {
    //        this.style = "background-color: #888;";
    //    });
    //}, function () {
    //    $(this).on('mouseleave', function () {
    //        this.style = "";
    //    });
    //});

    //$("ul.menu li a").on("click",
    //    function () {
    //        var me = $(this);
    //        alert(me.text());
    //    });

    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle")
        .on("click",
            function () {
                $sidebarAndWrapper.toggleClass("hide-sidebar");
                if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
                    $icon.removeClass("fa-angle-left");
                    $icon.addClass("fa-angle-right");
                } else {
                    $icon.removeClass("fa-angle-right");
                    $icon.addClass("fa-angle-left");
                }
            });
})();


