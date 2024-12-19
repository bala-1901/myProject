define(['scripts/app.module'],function (app) { 
    app.service('utilityService',['$rootScope','$q', function( $rootScope,$q) {

        var self= this;
        self.refreshScreen = function() {
            setTimeout(function(){qlik.resize();},500);
            setTimeout(function(){qlik.resize();},1000);
            setTimeout(function(){qlik.resize();},1500);
            setTimeout(function(){qlik.resize();},2000);
            setTimeout(function(){qlik.resize();},2500);
            setTimeout(function(){qlik.resize();},3000);
        }
    }])
})