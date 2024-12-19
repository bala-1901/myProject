// var config = {
//     host: 'senseintegration.qlik.com',
//     isSecure: true,
//     prefix: '/anon/',
//     port: 443
//   };
  
//   // Configure require config
//   require.config( {
//       baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
//   } );
  
//   require(['js/qlik'], function(qlik) {
  
//     var app = qlik.openApp('2d7f1f2f-bc62-410a-b12e-33bf9fe4a85e', config);
      
//       //get objects -- inserted here --
//   app.getObject('placeholder','JDpwZ');
//   app.getObject('placeholder2','Ggpaxa');
//   });
define(['scripts/app.module'],function (app) { 

  angular.module(qMashup)
  .service('qlikAppService', ['$rootScope','$q', function($rootScope, $q) { 

        
      var self = this;
      console.log(" Qlik App service initialized");
      self.initializeQlikApp = function(){
          var deferred=$q.defer();
          if(window.qlikApp !=null){
              deferred.resolve(window.qlikApp);
          }
          else {
              var config ={
                  host: 'https://BI-DEV-SRV',  //'172.20.60.123', //'senseintegration.qlik.com',   //"localhost",
                  prefix: "/default/",
                  prefix: '/anon/',
                  port: 443,
                  isSecure: true
              };

              var qlik, qlikApp, appId = "c862c27e-c7ad-4f77-ab2b-5b73da09feaf";  //"2d7f1f2f-bc62-410a-b12e-33bf9fe4a85e"; //"165af206-eb0c-4dc4-95f4-4ae0d15384dd";

              qlik=qlikApp = null;
              window.qlik=window.qlikApp=null;
              // require.config({ baseUrl});

              const baseUrl = ( config.isSecure ? 'https://' : 'http://' ) + config.host + (config.port ? ':' + config.port : '') + config.prefix;
              require.config({
                baseUrl: `${baseUrl}resources`,
                // webIntegrationId: config.webIntegrationId// only needed in QCS and QSEoK
              //   paths: {
              //     myAngularModule: "../extensions/angular-extension/my-angular-module" //update this path according to your environment
              //   }
              });

              require(["js/qlik"], function (qlikObj){

                  window.qlik = qlik = qlikObj;
                  console.log("Qlik Engine Initialized");
                  window.qlikApp = qlikApp = qlik.openApp(appId,config);
                  console.log('Qlik App' + appId + 'Opened Successfully');

                  qlikApp.model.waitForOpen.promise.then(function(){
                      console.log("app is ready");
                      deferred.resolve(window.qlikApp);
                  });
              });

          };
      }
  }]);
})