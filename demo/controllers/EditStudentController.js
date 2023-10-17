window.EditStudentController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Sửa thông tin sinh viên";

    // Lấy thông tin chi tiết
    let studentID = $routeParams.id;

    const apiStudents = "http://localhost:3000/students";

    $http.get(
        `${apiStudents}/${studentID}`
    ).then(function (response) {
        if (response.status == 200) {
            console.log(response.data);
            $scope.student = {
                name: response.data.ten,
                year: response.data.namsinh,
                couse: response.data.chuyennganh
            }
        }
    });

    // Chỉnh sửa thông tin sinh viên
    $scope.editStudent = function () {
        // Tạo 1 biến để kiểm tra
        let flag = true;

        // Kiểm tra từng trường dữ liệu
        $scope.kiemTra = {
            name: false,
            year: false,
            couse: false
        }

        // Kiểm tra dữ liệu
        if (!$scope.student || !$scope.student.name) {
            flag = false;
            $scope.kiemTra.name = true;
        }
        if (!$scope.student || !$scope.student.year) {
            flag = false;
            $scope.kiemTra.year = true;
        }
        if (!$scope.student || !$scope.student.couse) {
            flag = false;
            $scope.kiemTra.couse = true;
        }

        if (flag) {
            // Dữ liệu nhập từ input
            let updateStudent = {
                ten: $scope.student.name,
                namsinh: $scope.student.year,
                chuyennganh: $scope.student.couse
            }

            // console.log(newStudent);
            $http.put(
                `${apiStudents}/${studentID}`, // Link api
                updateStudent  // Dữ liệu mới để cập nhật
            ).then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    $location.path("trang-chu");
                }
            })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin !")
        }
    }
}