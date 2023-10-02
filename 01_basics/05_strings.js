const name = "Sagar "
const repoCount = 50

console.log(name + repoCount + " Value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//[use ^ upper code always ,best for easily undertand]

const gameName = new String("Hitesh -SH-HH-dJ-jks-sl")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.charAt(0));
// console.log(gameName.charAt(3));

console.log(gameName.charAt(5));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(4,6)
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const another2String = gameName.slice(-6,4);
console.log(another2String);

//remove white spaces from strin
const newStringOne = "    sagar   "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());


const url = "https://hitest.com/hitesh%20choudhary"
const ur=url.replace('%20','-')
console.log(ur);

console.log(url.includes('hitesh'));//true
console.log(url.includes('sagar'));//false


//changing String to an array 
console.log(gameName.split('-'));

//learn for MDN and console gameName;

