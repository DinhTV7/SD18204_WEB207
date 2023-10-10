window.AddStudentController = function ($scope, $http, $location) {
    $scope.title = "Thêm thông tin sinh viên";

    $scope.addStudent = function () {
        // Link API
        const apiStudents = "http://localhost:3000/students";

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
            let newStudent = {
                ten: $scope.student.name,
                namsinh: $scope.student.year,
                chuyennganh: $scope.student.couse
            }

            // console.log(newStudent);
            $http.post(
                apiStudents, // Link api
                newStudent  // Dữ liệu để thêm vào api
            ).then(function (response) {
                console.log(response);
                if (response.status == 201) {
                    $location.path("trang-chu");
                }
            })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin !")
        }
    }
}