window.ListStudentController = function ($scope, $http) {
    $scope.title = "Danh sách sinh viên";

    // Thực hiện công việc call API

    // Link API
    const apiStudents = "http://localhost:3000/students";

    // Tham số $http (là giao thức để thực hiện việc call api)
    // $http.phương thức sử dụng(link api).then()
    function getData () {
        $http.get(apiStudents).then(function (response) {
            console.log(response);
    
            // Truy cập vào dữ liệu
            console.log(response.data);
    
            if (response.status == 200) {
                $scope.listStudents = response.data;
            }
        })
    }
    getData();

    $scope.deleteStudent = function (deleteID) {
        if (deleteID) {
            let confirm = window.confirm("Bạn có chắc chắn xóa hay không?");
            if (confirm) {
                $http.delete(
                    `${apiStudents}/${deleteID}`
                ).then( function (response) {
                    if (response.status == 200) {
                        alert("Xóa thành công");
                    }
                })
            }
        }
    }
}