(function() {
  'use strict';
  angular.module('app',[])
  .controller("AppController",AppController)

  AppController.$inject = ['$http','$scope'];
  function AppController($http,$scope) {
 var menu = this;
    //https://davids-restaurant.herokuapp.com/menu_items.json.
    $http({
   method : "GET",
   url : "https://davids-restaurant.herokuapp.com/menu_items.json"
 }).then(function mySucces(response) {
     menu.menuItems = response.data.menu_items;
     console.log($scope.menuItems[0]);

   }, function myError(response) {
     menu.myWelcome = response.statusText;
 }).catch(console.log("error getting items"));

}

}());
