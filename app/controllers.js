(function () {
    var gasolinera = angular.module('gasolinera', ['ngResource']);

    gasolinera.controller("gasolineraController", function ($scope, $http) {
        $http.get("gas.json").success(function (data) {
            $scope.gasolineras = data;
        });
        $scope.estados1 = ["Durango", "Coahuila"];
        $scope.ciudades1 = ["Matamoros", "Torreon", "Viesca", "Gomez Palacio"]
    })
})();