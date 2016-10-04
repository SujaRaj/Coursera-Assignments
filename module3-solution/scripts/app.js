(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      title: '@',
      onRemove: '&'
        },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}
function FoundItemsDirectiveController() {
  var list = this;
  var items=[];
}


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.shortName='';
    menu.items=[];
    var serv

    menu.getMatchedMenuItems  = function () {
      var promise = MenuSearchService.getMenuItems(this.shortName);
      promise.then(function (response) {

        menu.items=response;
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    menu.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    console.log(menu.items[itemIndex]);
    menu.items.splice(itemIndex,1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath','$q'];
  function MenuSearchService($http,ApiBasePath ,$q) {
    var service = this;
    service.foundItems=[];

    service.getMenuItems = function (searchTerm)
    {
      var url = (ApiBasePath + "/menu_items.json");
      var foundItems =[];

      return  $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then (function(response){
        var menuItems = response.data.menu_items;
        for (var i = 0; i < menuItems.length; i++) {
          if(menuItems[i].description.includes(searchTerm))
          {
            service.foundItems.push(menuItems[i]);
          }
        }
        return service.foundItems;
      })
    }

    service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
    return service.foundItems
 };
  }
}());
