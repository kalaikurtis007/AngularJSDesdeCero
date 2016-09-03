miAppAngular.controller('inicio', function ($scope, configuracionGlobal, $http) {
    $scope.config = configuracionGlobal;
    $http.get(configuracionGlobal.api_url + '/user/')
        .then(function (respuesta) {
            $scope.empleados = respuesta.data;
        });

    $scope.verDetalles = function (prmEmpleado) {
        alert(prmEmpleado)
    }
});