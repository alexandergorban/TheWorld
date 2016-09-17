/* site.js */

(function () {
    var ele = document.getElementById("username");
    ele.innerHTML = "ASP.NET Core";

    var main = document.getElementById("main");
    main.onmouseenter = function() {
        main.style = "background: #888";
    }
    main.onmouseleave = function() {
        main.style = "";
    }
})();


