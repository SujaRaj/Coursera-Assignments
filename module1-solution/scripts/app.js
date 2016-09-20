(function () {
  'use strict'

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope)
  {
 $scope.lunchItems = "";
 $scope.userMessage="";
 $scope.myColor="";
 $scope.checkIfTooMuch = function()
   {

   var message =""

    if(!$scope.lunchItems.length){
        message = 'Please enter data first.';
        $scope.myColor ="red"
  }
    else {
   var items = $scope.lunchItems.split(',');
   var itemsCount = items.length;
for (var i = 0; i < items.length; i++) {
  if(!items[i].length){
    itemsCount-=1;
  }
}
   if (itemsCount<=3) {
     message ='Enjoy!'
   } else {
     message ='Too Much!'
   }
 $scope.myColor ="green";
};

   $scope.userMessage= message;
 };
  };

})();
