"use strict";
let myuser = {
    _id: "uyt",
    name: "abhinav",
    email: "a@a.com",
    number: 9876543,
    isActive: true
};
myuser.email = "abhinav@gmail.com";
// myuser._id = "uyu"
// TODO we got some smart error because id is readonly propoerty
// Cannot assign to '_id' because it is a read-only property.
// TODO question :- if id would be array can we push values to  array in case of readonly ?
// Answer is Yes
