"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identityOne(arg) {
    return arg;
}
//  TODO :-  whenever we put First  T inisde a <>  genric lock that dataType for that function
// identityOne("7")
// console.log();
function loggingIdentity(arg) {
    // return arg.length;
    console.log(arg.length);
    // TODO : -
    return arg;
}
let abc = [1, 3, 4, 5, 6, 7, 8];
loggingIdentity(abc);
// Arrow function
const randomData = (product) => {
    return product[1];
};
console.log(randomData(abc));
// TODO :- another level of generic
function identityTwo(valone, valTwo) {
    return {
        valTwo,
        valone,
    };
}
// TODO here am passing one is number and second is string
console.log(identityTwo(7, "7"));
// here i am specially mention that second parameter in generic is number
function identityThree(valone, valTwo) {
    return {
        valTwo,
        valone,
    };
}
function identityFour(valone, valTwo) {
    return {
        valTwo,
        valone,
    };
}
// TODO = in log here we are passing an object with some good properties
console.log(identityFour(76, {
    connecton: "http://localhost",
    username: "abh",
    password: "uhuhuh",
    connectionStatus: false,
    Port: 9898,
}));
class sellable {
    constructor() {
        this.cart = [];
    }
    addtoCart(product) {
        this.cart.push(product);
    }
}
