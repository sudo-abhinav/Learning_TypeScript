// TODO An abstract class is typically used to define common 
// behaviors for derived classes to extend. Unlike a regular class, 
//  an abstract class cannot be instantiated directly.


abstract class hero{
constructor(public name:string , public HeroPower  :string){}

abstract getsepia():void;

}

// TODO :- Cannot create an instance of an abstract class.ts(2511) this error gives you typescript when you try to create abstract class object

// if we want to create a object from abstract class first we have to inherit in some other class

class marvel extends hero{
    constructor(public name:string , public HeroPower :string , public isAlive:boolean){
        super(name,HeroPower);
    }
getsepia(): void {
    console.log("hello sepia");
}
// TODO :- 
// if we want to add something in new class then we have to make a new cnstructor with super keyword;
// and pass the paernt class variable inside super keyword
}



const abhinav = new marvel("ironman" , "ironSuite" , true )
abhinav.getsepia()

console.log(abhinav.isAlive);
