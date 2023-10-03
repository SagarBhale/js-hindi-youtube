const tinderUser0 = new Object();// sigleton objet
const tinderUser = {} //non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Samm"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//nested objects

const regularUser = {
    email: "sammee@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname.);

//combining objects

const obj1 =  {1: "a", 2: "b"};
const obj2 =  {3: "a", 4: "b"};
const obj4 =  {5: "a", 6: "b"};

//const obj3 = {obj1, obj2};
 
//const targetObj= Object.assign(target,source);

//const obj3 = Object.assign( {} ,obj1,obj2,obj4)


//mosttly we use this 
const obj3 = {...obj1,...obj2}
// console.log(obj3);

//array ka object
const users = [
    {
        id :  1,
        email: "h@gmail.com"
    },
    {
        id :  1,
        email: "h@gmail.com"
    },
    {
        id :  1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedI'));



