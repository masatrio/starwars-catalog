app.controller('movie', ['$scope','$timeout','movieService',function($scope, $timeout, movieService) {
    var date;
    $scope.detailVisible    = false;
    $scope.movieData        = [];
    $scope.characterData    = [];
    $scope.charSelect       = [];
    $scope.selection        = 0;
    $scope.selectionData    = {};
    $scope.showMovieDetail = function(id){
        $scope.charSelect       = [];
        $scope.selection        = id;
        for(var j = 0; j < $scope.movieData.length; j++){
            if($scope.movieData[j].episode_id == id){
                $scope.selectionData = $scope.movieData[j];
                break;
            }
        }
        for(j = 0; j < $scope.characterData.length; j++){
          if($scope.selectionData['charNum'].includes($scope.characterData[j].id)){
              $scope.charSelect.push($scope.characterData[j]);
          }
        }
        console.log($scope.charSelect);
        $scope.detailVisible = true;
        console.log($scope.selectionData);
    }
    $scope.showCharDetail = function(id){
        for(var i = 0; i < $scope.charSelect.length; i++){
            if($scope.charSelect[i].id == id){
                alert('Name : '+$scope.charSelect[i].name+'\nGender : '+$scope.charSelect[i].gender+'\nHeight : '+$scope.charSelect[i].height+'\nHair Color : '+$scope.charSelect[i].hair_color);
            }
        }
        console.log(id);
    }
    var charTemp;
    // get movie data
    for(var i=1; i<8; i++){
        movieService.getMovie(i).then(function successCallback(response) {
          date                = response.release_date.split('-');
          response.dateName   = MONTH[ date[1]-1 ]+' '+date[0];
          response.date       = date[2];
          response.charNum    = [];
          angular.forEach(response.characters, function(value, key) {
              charTemp = value.split('/');
              response.charNum.push(Number(charTemp[5]));
          });
          $scope.movieData.push(response);
        }, function errorCallback(response){
        });
    }
    for(var j=1; j<89; j++){
        movieService.getCharacter(j).then(function successCallback(response) {
          charTemp = response['url'].split('/');
          response.id   = Number(charTemp[5]);
          $scope.characterData.push(response);
        }, function errorCallback(response){
        });
    }
    console.log($scope.characterData);
    console.log($scope.movieData);
}]);
