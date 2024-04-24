"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
// TODO :- if we call this function inside a variable then we can a string 
let value = addTwo(6);
function addupper(val) {
    return val.toUpperCase();
}
console.log(addupper("abhinav"));
const json = JSON.parse("55");
console.log(typeof json);
function signup(name, email, isPaid) {
    return `signup: user name is ${name} and email is ${email} and user did not paid for any course ${isPaid}`;
}
function login(name, email, isPaid = true) {
    return `login : user name is ${name} and email is ${email}`;
}
console.log(login("ankit", "tausig@gmil.com"));
console.log(signup("abhi", "abhi@gmail.com", true));
const heros = ["ironMan", "batman", "superMan", "wanda", "Thor", "spiderMan", "vision", "Hulk"];
const getHello = ((param) => {
    return param;
});
console.log(getHello("8"));
heros.map(hero => {
    console.log(hero);
});
