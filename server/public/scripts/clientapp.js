(function() {

  'use strict';

  angular
    .module('myApp', ['auth0.lock', 'angular-jwt', 'ngRoute'])
    .config(function($routeProvider, lockProvider) {

      lockProvider.init({
        clientID: 'ENU2nYXIx5cdiOpkaTUWNn5NhesOSETI',
        domain: 'kerij.auth0.com'
      });

      $routeProvider
        .when( '/', {
          controller: 'homeController',
          templateUrl: '/views/home.html'
        })
        .when( '/login', {
          controller: 'loginController',
          templateUrl: '/views/login.html'
        });
    });

})();
