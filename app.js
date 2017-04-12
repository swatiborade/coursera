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
                      $scope.msgstyle={color:'green'};
                      $scope.borderstyle={border: '1px solid green'};
                    }
                    else{
                      $scope.message="Too much!";
                      $scope.msgstyle={color:'green'};
                      $scope.borderstyle={border: '1px solid green'};
                    }
            }
            else {
              $scope.message="Please enter data first";
              $scope.msgstyle={color:'red'};
              $scope.borderstyle={border: '1px solid red'};
            }


            };

         });
})();
