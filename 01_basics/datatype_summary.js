// Primitive 

// 7 types: Stirng ,Number, Boolean, null, undefined, Symbol(for making value unique), Bigint

// java script is Dynamic type languge 

const score = 100
const scoreValue = 100.3;

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id===anotherId)

//const bigNumber = 3453453654646456n //n is for converting in bigInt

//Reference (Non primitive)

//Array, Objects, Functions, 

const heros = ["shaktiman ","naagraj", "doga"]  //array

let myObj={
    name: "Sagar"         // objects in curley braces
    //age: 22
}

// FUnction 

const myFunction = function()
{
    console.log("Hello world");
}


console.log(typeof myFunction);

console.log(typeof heros);

console.log(typeof anotherId);



//==========================+++++++++++++++++++===============
//  MEMORY
// 1. Stack(Primitive)(mtlb jab bhi variable declare hote he to copy milti ), 
//2.Heap(Non-Primitive)( jab bhi array vgera declare hota he to reference milta he orginal value ka)

let myYoutubename = "sagarbhale.com"  //stack(Primitive)

let anothername = "chaiorcode"

console.log(myYoutubename)
console.log(anothername);

let userOne = {                   //copy nhi original value ka reference milta 
    email: "useratgoogle.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="Hitesh@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

//Means STACK me kisi bhi variable ki value ko change kre 
// to original value me koi change nhi hota he 

//HEAP me original value me bhi change hoga agr hum usko reference ke through update kre to 







