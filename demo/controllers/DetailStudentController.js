window.DetailStudentController = function ($scope, $http, $routeParams) {
    $scope.title = "Thông tin chi tiết sinh viên";

    // Lấy thông tin chi tiết
    let studentID = $routeParams.id;

    const apiStudents = "http://localhost:3000/students";

    $http.get(
        `${apiStudents}/${studentID}`
    ).then(function (response) {
        if (response.status == 200) {
            console.log(response.data);
            $scope.student = {
                editID: response.data.id,
                name: response.data.ten,
                year: response.data.namsinh,
                couse: response.data.chuyennganh
            }
        }
    });
}