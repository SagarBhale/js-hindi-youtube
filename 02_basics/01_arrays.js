// array 
// array are objects in js
//arrays of js is resizable ,zero base indexing , shallow ,deep copy 


const myArr = [0,1,2,3,4,5,6,7,8];

console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr[6]);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[7]);

const myHeros = ["shaktiman","maagraj"];
// console.log(myHeros);

const myArr2  = new Array(1,2,3,4);
// console.log(myArr2[1]);

// -----ARRAY METHODS-------//

// myArr.push(12);
// myArr.push(16);
// myArr.push(13);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


//----------slice, splice----------//

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

////////////////////////////////

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);



console.log("hello");



