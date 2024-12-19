
define(['scripts/app.module'],function (app) { 

    angular.module(qMashup)
    .config( function($locstionProvider, $routeProvider){

        $locationProvider.hashPrefix('');

        $routeProvider
        .when("/", {
            templateUrl : "",
            controller : "homeController"
        })

        $routeProvider
        .when("/page1", {
            templateUrl : "views/page1.html",
            controller : "page1Controller",
            resolve : {
                qlikApp : function(qlikAppService){
                    return qlikAppService.intializeQlikApp();
                }
            }
        })
    })
})