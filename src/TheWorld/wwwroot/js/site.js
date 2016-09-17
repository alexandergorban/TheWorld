/* site.js */

(function () {
    $('#username').text("ASP.NET Core");

    // -- or --
    //var ele = $("#username");
    //ele.text("ASP.NET Core");

    $('#main').hover(function () {
        $(this).on('mouseenter', function () {
            this.style = "background-color: #888;";
        });
    }, function () {
        $(this).on('mouseleave', function () {
            this.style = "";
        });
    });

    // -- or with JS --
    //var main = document.getElementById("main");
    //main.onmouseenter = function() {
    //    main.style = "background-color: #888;";
    //};
    //main.onmouseleave = function() {
    //    main.style = "";
    //};

    $('ul.menu li a')
        .hover(function () {
            $(this)
                .on('click',
                    function () {
                        alert($(this).text());
                    });
        });

    // -- or --
    //var menuItems = $("ul.menu li a");
    //menuItems.on("click",
    //    function () {
    //        var me = $(this);
    //        alert(me.text());
    //    });

})();


