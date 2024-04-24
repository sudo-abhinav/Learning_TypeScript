"use strict";
// class user{
//     guid:number;
//     email:string;
//     name :string;
//     constructor(guid , name , email){
//         this.guid =  guid;
//         this.email = email;
//         this.name = name;
//     }
//     readonly city : string= "patna";
// }
// TODO there is another way declaring a class in typescript
Object.defineProperty(exports, "__esModule", { value: true });
class Buggyuser {
    //? TODO if we change private to protected then access from estends class
    constructor(guid, name, email) {
        this.guid = guid;
        this.name = name;
        this.email = email;
        //   private _courseCount: number = 1;
        this._courseCount = 1;
        this.city = "patna";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // TODO in setter we can't set the return type
    // TODO A this error will see 'set' accessor cannot have a return type annotation.ts(1095)
    set courseCountData(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should not less that one..");
        }
        this._courseCount = courseNum;
    }
    get getCourseCount() {
        return this._courseCount;
    }
}
// TODO inheritance
class subUser extends Buggyuser {
    constructor() {
        super(...arguments);
        this.isSubAdmin = true;
    }
    changeCourseCount(num) {
        this._courseCount = num;
        return this._courseCount;
    }
    chnageCityName() {
        // this.city = "delhi";
        // we can change the city because city is readonly propery
    }
}
const abhi = new Buggyuser(6577665544321, "abhinav", "abhinav@gmail.com");
// abhi.city = delhi;
const ankit = new subUser(456787654, "ankitDon", "ankit@gmail.com");
console.log(ankit.changeCourseCount(5));
// abhi.courseCountData = 7;
// console.log(abhi.getCourseCount);
abhi.getCourseCount;
console.log(abhi.getAppleEmail);
abhi.getAppleEmail;
