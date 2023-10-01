const accountId = 144553
let accountEmail = "sagarbhale@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //if you not initialise variable then js is defined as undefined

// accountId = 2 //not allowed


accountEmail = "hc.com"
accountPassword = "11111211"
accountCity = "Banguluru"



console.log(accountId);

/*
    Prefer not to use var 
    because of issue in block scope and functional scope

    we use only let and const
*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

