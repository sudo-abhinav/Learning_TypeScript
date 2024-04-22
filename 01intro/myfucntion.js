"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
// TODO :- if we call this function inside a variable then we can a string 
var value = addTwo(6);
function addupper(val) {
    return val.toUpperCase();
}
console.log(addupper("abhinav"));
var json = JSON.parse("55");
console.log(typeof json);
function signup(name, email, isPaid) {
    return "signup: user name is ".concat(name, " and email is ").concat(email, " and user did not paid for any course ").concat(isPaid);
}
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "login : user name is ".concat(name, " and email is ").concat(email);
}
console.log(login("ankit", "tausig@gmil.com"));
console.log(signup("abhi", "abhi@gmail.com", true));
var heros = ["ironMan", "batman", "superMan", "wanda", "Thor", "spiderMan", "vision", "Hulk"];
var getHello = (function (s) {
    return s;
});
console.log(getHello("this is good"));
heros.map(function (hero) {
    console.log(hero);
});
