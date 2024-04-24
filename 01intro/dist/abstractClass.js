"use strict";
// TODO An abstract class is typically used to define common 
// behaviors for derived classes to extend. Unlike a regular class, 
//  an abstract class cannot be instantiated directly.
class hero {
    constructor(name, HeroPower) {
        this.name = name;
        this.HeroPower = HeroPower;
    }
}
//  const tausif = new hero()
// TODO :- Cannot create an instance of an abstract class.ts(2511) this error gives you typescript when you try to create abstract class object
// if we want to create a object from abstract class first we have to inherit in some other class
class marvel extends hero {
    constructor(name, HeroPower, isAlive) {
        super(name, HeroPower);
        this.name = name;
        this.HeroPower = HeroPower;
        this.isAlive = isAlive;
    }
    getsepia() {
        console.log("hello sepia");
    }
}
const abhinav = new marvel("ironman", "ironSuite", true);
abhinav.getsepia();
console.log(abhinav.isAlive);
