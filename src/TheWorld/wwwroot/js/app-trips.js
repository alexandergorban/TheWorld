﻿// app-trips.js
(function() {

    "use strict";

    // Creating the Module
    angular.module("app-trips", ["simpleControls", "ngRoute"])
        .config(function($routeProvider) {

            $routeProvider.when("/",
            {
                controller: "tripController",
                controllerAs: "vm",
                templateUrl: "/views/tripsView.html"
            });

            $routeProvider.otherwise({ redirectTo: "/" });
        });

})();