define(['scripts/app.module'],function (app) { 

    angular.module(qMashup)
    .run(['$rootScope', 
        function ($rootScope){

            $rootScope.$on("$routeChangeStart", function(event, nextPageObj, currentPageObj) {
                if(window.qlik !=null) {
                    setTimeout(function(){qlik.resize();},500);
                    setTimeout(function(){qlik.resize();},1000);
                    setTimeout(function(){qlik.resize();},1500);
                    setTimeout(function(){qlik.resize();},2000);
                    setTimeout(function(){qlik.resize();},2500);
                    setTimeout(function(){qlik.resize();},3000);
                }
            });
        }
    ]);
})