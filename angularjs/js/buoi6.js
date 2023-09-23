// Khai báo 1 mảng dữ liệu nhân viên
// Tên, ngày sinh, mức lương, giới tính (0 là nam, 1 là nữ)
// Sử dung angularjs để hiển thị ra table

// Định nghĩa vùng sử dụng angular
let myApp = angular.module('myApp', []);

// định nghĩa controller
myApp.controller('employeesController', function ($scope) {
    $scope.employees = [
        {
            ten: "Tạ Văn Định",
            ngaySinh: new Date("2007-11-20"),
            mucLuong: 10000000,
            gioiTinh: 0
        },
        {
            ten: "Tạ Văn Định 2",
            ngaySinh: new Date("1995-11-20"),
            mucLuong: 10000000,
            gioiTinh: 1
        },
        {
            ten: "Tạ Văn Định 3",
            ngaySinh: new Date("1987-11-20"),
            mucLuong: 10000000,
            gioiTinh: 0
        },
    ];

    $scope.hoTen = "DinhTV7";

    $scope.number = 2;

    $scope.sayHello = function ($name) {
        alert("Xin chào " + $name);
    }

    // Click vào tên của nhân viên nào 
    // thì hiển thị thông báo 
    // Xin chào + Tên nhân viên đấy

    $scope.myFunc = function () {
        console.log("Mãi bên nhau bạn nhé.");
    }

    // Khi hover vào ngày sinh
    // nếu tuổi < 18 thì hiển thị "Đi tù"
    // Neesy tuổi >= 18 thì hiển thị "Cưới thôi"

    $scope.tuoi = function($age) {
        let tuoi = new Date().getFullYear() - $age.getFullYear();
        if (tuoi < 18) {
            console.log("Đi tù");
        } else {
            console.log("Cưới thôi");
        }
    }
});