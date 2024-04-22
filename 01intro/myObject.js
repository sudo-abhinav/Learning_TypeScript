"use strict";
// const newobj = {
//     name : "abhinav",
//     email : "abhinav@gmail.com",
//     isActive  :true
// }
Object.defineProperty(exports, "__esModule", { value: true });
// TODO here i make  address is optional 
var user = {
    name: "abhinav",
    age: 27
};
function userData(userdata) {
    if (userdata.age > 58) {
        return userdata;
    }
    else {
        console.log("rror");
    }
}
console.log(userData(user));
