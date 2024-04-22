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
var abc = [1, 3, 4, 5, 6, 7, 8];
loggingIdentity(abc);
// Arrow function
var randomData = function (product) {
    return product[1];
};
console.log(randomData(abc));
