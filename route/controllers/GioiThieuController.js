window.GioiThieuController = function ($scope, $routeParams) {
    $scope.title = "Đây là giới thiệu";
    console.log($routeParams);
    let id = $routeParams.id;
    console.log(id);
}