app.service('movieService', ['$http','$q', function ($http,$q) {
  this.getMovie = function(id) {
    var defer = $q.defer();
    var url = 'https://swapi.co/api/films/'+id+'/';
    $http({
      method : "GET",
      url : url
    }).then(function successCallback(response) {
      var data = response.data;
      defer.resolve(data);
    }, function errorCallback(response){
      defer.reject(response);
    });
    return defer.promise;
  };
  this.getCharacter = function(id) {
    var defer = $q.defer();
    var url = 'https://swapi.co/api/people/'+id+'/';
    $http({
      method : "GET",
      url : url
    }).then(function successCallback(response) {
      var data = response.data;
      defer.resolve(data);
    }, function errorCallback(response){
      defer.reject(response);
    });
    return defer.promise;
  };
}]);
