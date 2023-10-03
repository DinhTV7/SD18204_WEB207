window.TrangChuController = function ($scope) {
    $scope.title = "Đây là trang chủ";

    $scope.themMoi = function () {
        // Lấy toàn bộ dữ liệu từ form
        console.log($scope.inputValue);
        // Lấy ra từng thuộc tính
        console.log($scope.inputValue.name);
        console.log($scope.inputValue.address);
    }

    $scope.tinhTong = function () {
        $scope.sum = parseFloat($scope.number.one) + parseFloat($scope.dangnhap.user_name);
    }

    $scope.dangNhap = function () {
        $scope.flag = false;
        let matKhau = $scope.account.pass_word;
        if (matKhau != '' && matKhau == "thaydinhdz") {
            $scope.flag = true;
        } else {
            alert("Bạn đã nhập sai mật khẩu");
        }
    }
    
    $scope.count = 0;
    $scope.dem = function () {
        $scope.count++;
        console.log($scope.count);
    }
}