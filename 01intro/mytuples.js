"use strict";
// TODO tuples in TS
Object.defineProperty(exports, "__esModule", { value: true });
// example of creatin tuple 
// in the case of tuples order of Tuples also matter, if i put object n 0th place then it will gives you error;
var myUser;
myUser = ["sbh", 34, true, { name: "abhinav" }];
console.log(typeof myUser[3]);
var myData = ['abhinav', 'abhinav@gmail.com'];
myData.push("dd");
// this is the issue of tuple we can push our new data in array but we don't want to 
// because this things cause me big issue in production
console.log(myData);
