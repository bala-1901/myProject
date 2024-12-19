define(['scripts/app.module'],function (app) { 
    app.controller("page1Controller",function(){
        qlikApp.getObject("divSelectionBar","CurrentSelections");
        qlikApp.getObject("divChart","");
    })
})