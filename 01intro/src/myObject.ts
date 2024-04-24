// const newobj = {
//     name : "abhinav",
//     email : "abhinav@gmail.com",
//     isActive  :true
// }

// function createUser({name:string , isPaid:boolean}){}

// let newuser = {name:"abhinav" ,email: "ahbi@gail.com",isPaid:true}

// createUser(newuser);

// function createcourse():{name:string , price:number}{
//     return {name:"react" , price : 68765}
// }
// console.log(
//     createcourse()
// );


// TODO TYPE alising
/*whenever we creare a type the first letter is capital */
// when we want to make optional things in type then we have to use ? "question mark" like 
// this called Type Aliasing or in-general this called custom type  
type User = {
    name :string,
    age : number,
    address?: string
}
// TODO here i make  address is optional 

const user :User = {
    name:"abhinav",
    age:27
}

function userData(userdata : User){
    if(userdata.age > 58){
        return userdata;
    }else{
        console.log("rror");
         
    }
}
console.log(userData(user));


// console.log(user.age);

type ID= number;

const userID:ID = 1234;










export {}