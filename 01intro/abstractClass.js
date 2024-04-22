// TODO An abstract class is typically used to define common 
// behaviors for derived classes to extend. Unlike a regular class, 
//  an abstract class cannot be instantiated directly.
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
var hero = /** @class */ (function () {
    function hero(name, HeroPower) {
        this.name = name;
        this.HeroPower = HeroPower;
    }
    return hero;
}());
// TODO :- Cannot create an instance of an abstract class.ts(2511) this error gives you typescript when you try to create abstract class object
// if we want to create a object from abstract class first we have to inherit in some other class
var mavel = /** @class */ (function (_super) {
    __extends(mavel, _super);
    function mavel(name, HeroPower, isAlive) {
        var _this = _super.call(this, name, HeroPower) || this;
        _this.name = name;
        _this.HeroPower = HeroPower;
        _this.isAlive = isAlive;
        return _this;
    }
    mavel.prototype.getsepia = function () {
        console.log("hello sepia");
    };
    return mavel;
}(hero));
var abhinav = new mavel("ironman", "ironSuite", true);
abhinav.getsepia();
console.log(abhinav.isAlive);
