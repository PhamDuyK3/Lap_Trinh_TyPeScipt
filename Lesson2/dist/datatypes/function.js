// 1. Function declaration (Khai bao ham)
function func1() {
    console.log("func1");
}
var func2 = function () {
    console.log("func2");
};
var func3 = function () {
    console.log("func3");
};
// 2. Function return
var num;
// function sum():number{
//     return;
// }
// function showname():string{
//     return;
// }
function logger() {
    console.log("Thêm mới thành công");
}
function ShowError() {
    var error = new Error("Something went wrong");
    throw error;
}
// const error = ShowError()
// 3. Function parameter
function sum(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
// console.log(sum(10,-1));
function showName() {
    return "";
}
// 4. Rest parameter
var showclasses = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "Sinh vi\u00EAn".concat(name, " h\u1ECDc ").concat(classes.join(","), " ");
};
console.log(showclasses("Nam", "Nodejs", "Typescript", "Phap Luat"));
// 5. Callback
var numArr = [5, 10, 15, 20];
//     const result=numArr.map((item)=>{
//     return item * item
// })
// console.log(result);
// const we17305_map = function(arr: number[], callback?: (item: number) => number) {
//     const temp: number[] = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17305_map(numArr, (item) => {
//     return item * 2
// })
// console.log(result);
