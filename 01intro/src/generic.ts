function identityOne<T>(arg: T): T {
  return arg;
}
//  TODO :-  whenever we put First  T inisde a <>  genric lock that dataType for that function

// identityOne("7")
// console.log();

function loggingIdentity<T>(arg: T[]): T[] {
  // return arg.length;
  console.log(arg.length);
  // TODO : -
  return arg;
}

let abc = [1, 3, 4, 5, 6, 7, 8];
loggingIdentity(abc);

// Arrow function

const randomData = <T>(product: T[]): T => {
  return product[1];
};
console.log(randomData(abc));

// TODO :- another level of generic

function identityTwo<T, U>(valone: T, valTwo: U): object {
  return {
    valTwo,
    valone,
  };
}

// TODO here am passing one is number and second is string
console.log(identityTwo(7, "7"));

// here i am specially mention that second parameter in generic is number
function identityThree<T, U extends number>(valone: T, valTwo: U): object {
  return {
    valTwo,
    valone,
  };
}

//   console.log(identityThree(76,"76"));

interface DBConnection {
  connecton: string;
  username: string;
  password: string;
  connectionStatus: boolean;
  Port: number;
}

function identityFour<T, U extends DBConnection>(valone: T, valTwo: U): object {
  return {
    valTwo,
    valone,
  };
}

// TODO = in log here we are passing an object with some good properties
console.log(
  identityFour(76, {
    connecton: "http://localhost",
    username: "abh",
    password: "uhuhuh",
    connectionStatus: false,
    Port: 9898,
  })
);





// TODO genric in classes


interface Quiz{
    name:string,
    time:string,
    subject :string
}
interface Course{
    name:string,
    author:string,
    subject:string
}


class sellable<T>{
    public cart: T[] = [];
    

    addtoCart(product:T){
        this.cart.push(product)
    }
    
}


export {};
