// TODO Interfaces;

interface Transcation {
  payeeAccountNumber: number;
  payerAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transcation: Transcation[];
  // we are passing a interface as argument with array so we can store how many transcation are happen
}

const transcation1: Transcation = {
  payeeAccountNumber: 765,
  payerAccountNumber: 123,
};
const transcation2: Transcation = {
  payeeAccountNumber: 723,
  payerAccountNumber: 345,
};
const bankaccount: BankAccount = {
  accountNumber: 98766,
  accountHolder: "abhinav kumar",
  balance: 7800,
  isActive: true,
  transcation: [transcation1, transcation2],
};
// TODO______________________________________________________________________
// TODO how to extend interfaces & how we use two interfaces in one object

interface Book {
  name: string;
  price: number;
}
//  TODO in Ebook interface we can see duplicacy so using extends we can reduce that ...
interface Ebook extends Book {
  // name:string;
  // price:number;
  FileSize: number;
  format: string;
}

interface AudioBook extends Ebook {
  // name:string;
  // price:number;
  // FileSize:number;
  // format : string;
  duration: number;
}

let userbook: AudioBook = {
  name: "humpty dumpty",
  price: 234,
  FileSize: 300,
  format: "epub",
  duration: 5,
};

// TODO in typescript if we same name interface then typescript merge it
// in below example how we merge two interface

interface Aeroplane {
  name: string;
  FuelCapacity: number;
  Weight: number;
}

interface Aeroplane {
  isActive: boolean;
  pasangerCapacity: number;
}

let flyingObject: Aeroplane = {
  name: "Airbus A380",
  FuelCapacity: 1000,
  Weight: 3500,
  isActive: true,
  pasangerCapacity: 90,
};


interface buggyuser{
    readonly id : number
    name:string,
    email:string,
    googleId?:string
    startTrail():string,
    getCoupon (coupanname:string):number;
}

let buggydata :buggyuser = {
    id:22,
    name:"abhi",
    email:"name#b.com",
    startTrail:()=>{
        return "sguu";
    },
    getCoupon:(coupon:"abhinav")=>{
        return 10
    }
}

// console.log(buggydata.getCoupon);























//TODO UNIONS in TS

type ID = number | string;

// TODO this is called unions we are making using PIPE "|"

function printID(id: ID) {
  // console.log(id);
  // console.log(id.toUpperCase());
  // TODO if we are converting id to uppercase and this is a big issue
  // for preventing these thing we can use narrowing
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// printID('abh')
// printID(22)

// TODO :-  if  type is decide by compiler that is called infer
// TODO = slice works on string and array both so we want print only 3 char from first
// TODO = how we can accept array also , we can achieve that using UNION

function getFirstThree(x: string | number[] | string[]) {
  return x.slice(0, 3);
}

// console.log(getFirstThree('sbhuyg'));
console.log(
  getFirstThree(["abhinav", "alok", "tausif", "ankt", "uppen", "yogi"])
);

type User = {
  name: string;
  id: number;
};
type AdinUser = {
  username: string;
  id: number;
};

let abhinav: User | AdinUser = {
  name: "abhi ",
  id: 98,
};
// am re-assinging the abhinav with adminuser value
abhinav = { username: "superuser", id: 98 };

export {};
