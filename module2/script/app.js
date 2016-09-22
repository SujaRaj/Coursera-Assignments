(function(){
  'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ListService',ListService);

ToBuyShoppingController.$inject = ['ListService'];
function ToBuyShoppingController(ListService) {
  var shoppingList = this;

  shoppingList.items = ListService.getItems();

  shoppingList.removeItem = function (itemIndex) {
  ListService.removeItem(itemIndex);
  };

}
AlreadyBoughtShoppingController.$inject = ['ListService'];
function AlreadyBoughtShoppingController(ListService) {

  var boughtList = this;

  boughtList.itemsBought = ListService.getBoughtItems();
}

function ListService() {
  var service = this;

  // List of shopping items
  var items = [
  { name: "Milk",   quantity: "2" },
  {    name: "Donut",    quantity: "200"  },
  {    name: "Cookie",    quantity: "300"  },
  {    name: "Chocolate",    quantity: "5"  },
  {    name: "Candy",    quantity: "5"  }
];
  var itemsBought =[];


 service.removeItem = function (itemIndex) {
   itemsBought.push(items[itemIndex])
   items.splice(itemIndex, 1);
 };

  service.getItems = function () {
    return items;
  };
  service.getBoughtItems = function () {
    return itemsBought;
  };
}

})();
