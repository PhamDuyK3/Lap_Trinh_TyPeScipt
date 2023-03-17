var arr = ["a", "b", "c"];
var arrNum = [1, 2, 3, 4];
var arr2 = [[1, 2, 3], [3, 4, 5]];
var tuple = ["van duy", "ha noi", 20];
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
console.log();
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    STATUS_CODE[STATUS_CODE["ERROR"] = 401] = "ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.CLIENT_ERROR;
