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

 /* $scope.unitList = {
                      "data": [
                          {
                              "unit_name": "Lightning ",
                              "unit_origin": "FFXIII ",
                              "unit_type": "Normal ",
                              "unit_image_file": "lightning.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Delita ",
                              "unit_origin": "FFT ",
                              "unit_type": "Normal ",
                              "unit_image_file": "delita.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Ramza ",
                              "unit_origin": "FFT ",
                              "unit_type": "Normal ",
                              "unit_image_file": "ramza.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Dark Knight Cecil ",
                              "unit_origin": "FFIV ",
                              "unit_type": "Normal ",
                              "unit_image_file": "dkc.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Luneth ",
                              "unit_origin": "FFIII ",
                              "unit_type": "Normal ",
                              "unit_image_file": "luneth.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Gilgamesh ",
                              "unit_origin": "FFV ",
                              "unit_type": "Normal ",
                              "unit_image_file": "gilgamesh.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Noctis ",
                              "unit_origin": "FFXV ",
                              "unit_type": "Normal ",
                              "unit_image_file": "noctis.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Dark Fina ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "dfina.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Ace ",
                              "unit_origin": "FF TYPE-0 ",
                              "unit_type": "Normal ",
                              "unit_image_file": "ace.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Marie ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "marie.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Emperor ",
                              "unit_origin": "FFII ",
                              "unit_type": "Normal ",
                              "unit_image_file": "emperor.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Olive ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Exclusive",
                              "unit_image_file": "olive.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Queen ",
                              "unit_origin": "FF TYPE-0 ",
                              "unit_type": "Normal ",
                              "unit_image_file": "queen.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Orlandeau ",
                              "unit_origin": "FFT ",
                              "unit_type": "Normal ",
                              "unit_image_file": "orlandeau.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Fryevia ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Exclusive",
                              "unit_image_file": "fryevia.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Trance Terra ",
                              "unit_origin": "FFVI ",
                              "unit_type": "Normal ",
                              "unit_image_file": "tterra.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Aileen ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "aileen.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Reberta ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Exclusive",
                              "unit_image_file": "reberta.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Rem ",
                              "unit_origin": "FF TYPE-0 ",
                              "unit_type": "Normal ",
                              "unit_image_file": "rem.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Wilhelm ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "wilhelm.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Fohlen ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "fohlen.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Seabreeze Dark Fina ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "sdfina.png ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Tidus ",
                              "unit_origin": "FFX ",
                              "unit_type": "Normal ",
                              "unit_image_file": "tidus.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Zargabaath ",
                              "unit_origin": "FFXII ",
                              "unit_type": "Exclusive",
                              "unit_image_file": "zargabaath.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Lunera ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "lunera.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Mercenary Ramza ",
                              "unit_origin": "FFT ",
                              "unit_type": "Normal ",
                              "unit_image_file": "mramza.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Knight Delita ",
                              "unit_origin": "FFT ",
                              "unit_type": "Normal ",
                              "unit_image_file": "kdelita.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Veritas of the Dark ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "vod.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Veritas of the Flame ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "vof.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Veritas of the Light ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "vol.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Onion Knight ",
                              "unit_origin": "FFIII ",
                              "unit_type": "Normal ",
                              "unit_image_file": "onion.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Prishe ",
                              "unit_origin": "FFXI ",
                              "unit_type": "Normal ",
                              "unit_image_file": "prishe.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Ayaka ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "ayaka.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Nyx ",
                              "unit_origin": "FFXV ",
                              "unit_type": "Normal ",
                              "unit_image_file": "nyx.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Loren ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "loren.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Barbariccia ",
                              "unit_origin": "FFIV ",
                              "unit_type": "Normal ",
                              "unit_image_file": "barbariccia.PNG",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Gladiolus ",
                              "unit_origin": "FFXV ",
                              "unit_type": "Normal ",
                              "unit_image_file": "gladiolus.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Duke ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "duke.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Roy ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "roy.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Cloud ",
                              "unit_origin": "FFVII ",
                              "unit_type": "Normal ",
                              "unit_image_file": "cloud.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Elfreeda ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "elfreeda.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Pyro Glacial Lasswell",
                              "unit_origin": "FFBE ",
                              "unit_type": "CG ",
                              "unit_image_file": "cglasswell.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Jiraiya ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Normal ",
                              "unit_image_file": "jiraiya.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Basch ",
                              "unit_origin": "FFXII ",
                              "unit_type": "Normal ",
                              "unit_image_file": "basch.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Balthier ",
                              "unit_origin": "FFXII ",
                              "unit_type": "Normal ",
                              "unit_image_file": "balthier.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Demon Rain ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Limited ",
                              "unit_image_file": "drain.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Dracu Lasswell ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Limited ",
                              "unit_image_file": "dlasswell.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Elza ",
                              "unit_origin": "BF ",
                              "unit_type": "Limited ",
                              "unit_image_file": "elza.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "White Knight Noel ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Limited ",
                              "unit_image_file": "wkn.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Yun ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Limited ",
                              "unit_image_file": "yun.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Randi ",
                              "unit_origin": "Secret of Mana",
                              "unit_type": "Limited ",
                              "unit_image_file": "randi.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Vargun ",
                              "unit_origin": "BF ",
                              "unit_type": "Limited ",
                              "unit_image_file": "vargus.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "2B ",
                              "unit_origin": "Nier ",
                              "unit_type": "Limited ",
                              "unit_image_file": "2b.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "A2 ",
                              "unit_origin": "nNier ",
                              "unit_type": "Limited ",
                              "unit_image_file": "a2.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Grim Lord Sakura ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Limited ",
                              "unit_image_file": "gls.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Charming Kitty Ariana",
                              "unit_origin": "Ariana ",
                              "unit_type": "Limited ",
                              "unit_image_file": "kitty.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Christine ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Limited ",
                              "unit_image_file": "Christine.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Kryla ",
                              "unit_origin": "FFBE ",
                              "unit_type": "Limited ",
                              "unit_image_file": "kryla.PNG ",
                              "unit_count": "0"
                          },
                          {
                              "unit_name": "Ray Jack ",
                              "unit_origin": "King's Knight ",
                              "unit_type": "Limited ",
                              "unit_image_file": "rayjack.PNG ",
                              "unit_count": "0"
                          }
                      ]
                  };
*/
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
