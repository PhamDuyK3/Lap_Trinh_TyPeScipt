function print1(a) {
    if (typeof a === "string") {
        return a.toUpperCase;
    }
    return a;
}
function optionalFunc(Sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
}
optionalFunc({});
function login(user) {
    if ("is_admin" in user && user.is_admin) {
        console.log("welcom to admin");
    }
    else {
        console.log("welcom back");
    }
}
