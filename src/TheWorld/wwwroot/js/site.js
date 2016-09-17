/* site.js */

(function () {
    $('#username').text("ASP.NET Core");

    $('#main').hover(function () {
        $(this).on('mouseenter', function () {
            this.style = "background-color: #888;";
        });
    }, function () {
        $(this).on('mouseleave', function () {
            this.style = "";
        });
    });

    $('ul.menu li a')
        .hover(function () {
            $(this)
                .on('click',
                    function () {
                        alert($(this).text());
                    });
        });

    var $sidebarAndWrapper = $("#sidebar,#wrapper");

    $("#sidebarToggle")
        .on("click",
            function () {
                $sidebarAndWrapper.toggleClass("hide-sidebar");
                if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
                    $(this).text("Show Sidebar");
                } else {
                    $(this).text("Hide Sidebar");
                }
            });
})();


