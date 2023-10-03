

function sayMyNmae()
{
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}

//sayMyName  ---> function refernce
//sayMyName() function execution

//sayMyNmae();

function addTwoNumbers(number1,number2)
{
//    let result=number1+number2
//    return result;
      return number1+number2;
}

const res = addTwoNumbers(3,5);
//console.log("Result:", res);

//----------------------------------------------------------------------------------------------------------

function loginUserMessage(username = "sam"){

    //if(username===undfined) or

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in;`
}


//console.log(loginUserMessage("Sagar"));
//console.log(loginUserMessage());  //undefined or default value in function("sam" just logged in )

//-------------------------------------------------------------------------------------------------------------



function calculateCartPrice(...num1) //(... is rest operator that is addding all values in an arrray)
{
    return num1;
}
//console.log(calculateCartPrice(200,400,500,2000,3434));

//----------------------------------------------------------------------------------------------------------------


//object
const user = {
    username: "Sagar",
    prices: 199
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user);

//function call with object
handleObject({
    username:"sam",
    price: 399
})

//------------------------------------------------------------------------------------------------------------
const myNewArray = [200,400,500,700];

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,700]));