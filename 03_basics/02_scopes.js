// { } this curly blocks are scopes

//global scope

var c=300
let a =12121;

if(true){ 
    //block scope
    let a = 10;
    const b =20;
    //console.log("INNER block-b=",b);
    //console.log("INNER block-a=",a);
}

//console.log("gloabal-a=",a);

//console.log("global-c=",c);

//in this for loop it is local block
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// Interview => what is global scope in node and windows(console),what is clouser
//
//--------------------------------------------------------------------------------------

function one(){
    const username = "Hitesh";
    
    function two(){
        cosnt website ="Youtube"
        console.log(username);
    }
    console.log(website);
    two();
}
one();

