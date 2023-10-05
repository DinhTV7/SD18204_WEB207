window.ListStudentController = function ($scope, $http) {
    $scope.title = "Danh sách sinh viên";

    // Thực hiện công việc call API

    // Link API
    const apiStudents = "http://localhost:3000/students";

    // Tham số $http (là giao thức để thực hiện việc call api)
    // $http.phương thức sử dụng(link api).then()
    $http.get(apiStudents).then(function (response) {
        console.log(response);

        // Truy cập vào dữ liệu
        console.log(response.data);

        if (response.status == 200) {
            $scope.listStudents = response.data;
        }
    })
}