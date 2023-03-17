function print1(a:number | string){
if(typeof a==="string"){
    return a.toUpperCase
}
return a
}
function optionalFunc(Sinhvien?:{name?:String,age?:Number}){
if(!!sinhvien){
    return sinhvien.name
}
}
optionalFunc({})
interface User {
    username: string,
    password: string,
    email: string
}

type Admin = User & {
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}
function login(user:User | Admin){
if("is_admin" in user && user.is_admin){
    console.log("welcom to admin");
}else{
    console.log("welcom back"); 
}
}
