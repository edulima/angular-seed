'use strict';

angular.module('myApp.viewLogin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider.when('/viewLogin', {
      templateUrl: 'viewLogin/loginView.html',
      controller: 'LoginViewCtrl'
    });
}])

.controller('LoginViewCtrl', [function() {

}]);
