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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Buggyuser = /** @class */ (function () {
    // TODO if we change private to protected then access from estends class
    function Buggyuser(guid, name, email) {
        this.guid = guid;
        this.name = name;
        this.email = email;
        //   private _courseCount: number = 1;
        this._courseCount = 1;
        this.city = "patna";
    }
    Object.defineProperty(Buggyuser.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Buggyuser.prototype, "courseCountData", {
        // TODO in setter we can't set the return type
        // TODOA this error will see 'set' accessor cannot have a return type annotation.ts(1095)
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should not less that one..");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Buggyuser.prototype, "getCourseCount", {
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    return Buggyuser;
}());
// TODO inheritance
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isSubAdmin = true;
        return _this;
    }
    subUser.prototype.changeCourseCount = function (num) {
        this._courseCount = num;
        return this._courseCount;
    };
    subUser.prototype.chnageCityName = function () {
        // this.city = "delhi";
        // we can change the city because city is readonly propery
    };
    return subUser;
}(Buggyuser));
var abhi = new Buggyuser(6577665544321, "abhinav", "abhinav@gmail.com");
// abhi.city = delhi;
var ankit = new subUser(456787654, "ankitDon", "ankit@gmail.com");
console.log(ankit.changeCourseCount(5));
// abhi.courseCountData = 7;
console.log(abhi.getCourseCount);
abhi.getCourseCount;
console.log(abhi.getAppleEmail);
abhi.getAppleEmail;
