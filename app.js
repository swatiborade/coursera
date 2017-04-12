(function() {

  'use strict';
  angular.module('firstapp',[])
         .controller('mycontroller',function ($scope) {

            $scope.checkcount=function () {

                var stringToSplit=$scope.menu;
                if (stringToSplit!=null) {
                    var arrayOfStrings = stringToSplit.split(",");
                    if (arrayOfStrings.length<=3) {
                      $scope.message="Enjoy";
                    }
                    else{
                      $scope.message="Too much!";
                    }
            }
            else {
              $scope.message="Please enter data first";
            }


            };

         });
})();
