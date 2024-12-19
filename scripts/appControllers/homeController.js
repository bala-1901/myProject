define(['scripts/app.module'],function (app) { 
    app.controller("homeController",function ($scope) {
        console.log("This is Home Controller");

        qlikApp.getObject("divSelectionBar","CurrentSelections");
        qlikApp.getObject("divChart","");
    });
})