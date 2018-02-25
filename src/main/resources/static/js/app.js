var app = angular.module('ffbe', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('cyan').dark();
})

app.controller('unitList', function ($scope, $http, $mdDialog) {
  $scope.count = 0;

  /*
   * $http.get('/unitList').then(function (data) { $scope.unitList = data; })
   */

  $http.get('data/units.json').then(function (data) {
    $scope.unitList = data.data;
  })

$scope.addCount = function(){
    $scope.count++;
}

$scope.removeCount = function(){
    $scope.count--;
}

$scope.reset = function(){
          for(var i = 0; i<$scope.unitList.length; i++)
          {
             $scope.unitList[i].unit_count = 0;
          }
$scope.count = 0;
       }


  $scope.capture = function (ev) {
var html = angular.element(document.querySelector("html"));
html.addClass("hide-scrollbar");
    html2canvas(document.querySelector("#capture"), {useCORS: true}).then(canvas => {
      var filename = "team";
      if ($scope.team_name) {
        filename = $scope.team_name;
      }
      var img = canvas.toDataURL();
      //      download = document.createElement('a');
      //      download.setAttribute('href', img);
      //      download.setAttribute('download', filename + ".png");
      //      download.click();

      $mdDialog.show({
        controller: DialogController,
        template:
          '<md-dialog aria-label="Your Team">' +
          '<md-toolbar>' +
          '<div class="md-toolbar-tools">' +
          '<span flex></span>' +
          '<md-button class="md-icon-button" ng-click="cancel()">' +
          '<md-icon class="material-icons">clear</md-icon>' +
          '</md-button>' +
          '</div>' +
          '</md-toolbar>' +
          '<md-dialog-content>' +
          ' <div class="md-dialog-content">' +
          '<img src="' + img + '">' +
          '</div>' +
          '</md-dialog-content>' +
          '<md-dialog-actions layout="row">' +
          '<a download="' + filename + '.png" href="' + img + '">' +
          '<md-icon class="material-icons">get_app</md-icon>' +
          '</a>' +
          '</md-dialog-actions>' +
          '</md-dialog>',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
    });
html.removeClass('hide-scrollbar');
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }

});
