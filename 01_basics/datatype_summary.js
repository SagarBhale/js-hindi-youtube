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

//