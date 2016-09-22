(function(){
  'use strict'

  var initialShoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Candy",
    quantity: "5"
  }
];


angular.module('Module2', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ListFactory',ListFactory);

ShoppingListController.$inject = ['$scope','ListFactory'];
function ShoppingListController($scope,ListFactory) {
  var shoppingList = this;
  var list = ListFactory();

  shoppingList.removeItem = function (itemIndex) {
  shoppingList.removeItem(itemIndex);
  };

   for (var i = 0; i < initialShoppingList.length; i++) {
    list.addItem(initialShoppingList[i].name,initialShoppingList[i].quantity)
  };
  shoppingList.items = list.getItems();
  // for (var i = 0; i < shoppingList.items.length; i++)
  // {
  //   console.log('name : '+ shoppingList.items[i].name+ ' , Quantity : '+ shoppingList.items[i].quantity);
  // }
}

ShoppingListController.$inject = ['ListFactory'];
function BoughtListController(ListFactory) {
  var boughtList = this;
  var list = ListFactory();

  boughtList.itemName = "";
  boughtList.itemQuantity = "";

  boughtList.addItem = function () {
    list.addItem(list1.itemName, list1.itemQuantity);
  }

  boughtList.removeItem = function (itemIndex) {
  boughtList.removeItem(itemIndex);
  };



  boughtList.items = list.getItems();
  // for (var i = 0; i < shoppingList.items.length; i++)
  // {
  //   console.log('name : '+ shoppingList.items[i].name+ ' , Quantity : '+ shoppingList.items[i].quantity);
  // }
}

function ListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

function ListFactory() {
  var factory = function (maxItems) {
    return new ListService(maxItems);
  };

  return factory;
}

})();
