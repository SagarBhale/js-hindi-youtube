// Dates

let myDate = new Date()
console.log(myDate);//  
console.log(myDate.toString()); //  
console.log(myDate.toDateString()); // 
console.log(myDate.toJSON());  //
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());//


// 2023-10-02T07:21:21.188Z
// Mon Oct 02 2023 07:21:21 GMT+0000 (Coordinated Universal Time)
// Mon Oct 02 2023
// 2023-10-02T07:21:21.188Z
// 2023-10-02T07:21:21.188Z
// 10/2/2023
// 10/2/2023, 7:21:21 AM

console.log(typeof myDate);//object

//let myCreatedDate = new Date(2023, 0, 23);
//console.log(myCreatedDate.toString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()}and the time`

newDate.toLocaleString('default',{

    weekday: "long",
    
})
console.log(newDate);