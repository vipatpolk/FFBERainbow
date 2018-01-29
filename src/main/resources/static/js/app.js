var app = angular.module('ffbe', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})

app.controller('unitList', function ($scope, $http) {
  $scope.total = 0;
  $http.get('/unitList').then(function (data) {
    $scope.unitList = data;
  })

  $scope.capture = function () {

    html2canvas(document.querySelector("#capture")).then(canvas => {
      var filename = "team";
      if ($scope.team_name) {
        filename = $scope.team_name;
      }
      var img = canvas.toDataURL();
      download = document.createElement('a');
      download.setAttribute('href', img);
      download.setAttribute('download', filename + ".png");
      download.click();
    });

  };

});
