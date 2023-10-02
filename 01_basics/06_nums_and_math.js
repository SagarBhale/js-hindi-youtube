const score = 400;
console.log(score); //400
const balance = new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString());//change into string
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//after decimal 2 zeros

const otherNumber = 132.5455
console.log(otherNumber.toPrecision(3));


const hundreads = 10000000;
console.log(hundreads.toLocaleString('en-IN'));

// learn about ---> NUMBERS == Number.MAX_VALUES, Number.MIN_VALUES, Number.IsFinite,  Number.isInteger

//------------MATHS----------------------------------------------------


console.log(Math); //Object [Math] {} //learn from consol
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.2));
console.log(Math.sqrt(2));
console.log(Math.min(3,5,78,3,46,7,6));
console.log(Math.max(3,5,78,3,46,7,6));
console.log(Math.random());//values alwayes bt 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+ min);
