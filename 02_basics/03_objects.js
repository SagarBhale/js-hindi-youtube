/*

How to declare an object --> there are some ways to declare an object in js
1.  using constructor -sigleton create
2. using literal not create singleton

*/

//object literals (declaring object)
//Objext.create

const mySym = Symbol("key1");


const JsUser = {
    name: "Sagar",
    "full name": "Sagar Bhale",
    [mySym]: "mykey1",
    age: 19,
    location: "Jaiput",
    email: "sagarbhale@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

//changing email(override)
JsUser.email = "hitesh@.com";
//console.log(JsUser.email);

//if no one can change value then freeze;
JsUser.email = "hitesh@.com";
//Object.freeze(JsUser);
JsUser.email = "sagarbhael.com"
//console.log(JsUser);


JsUser.greeting = function(){

    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){

    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

