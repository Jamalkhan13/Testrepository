const accountId = 22334455
let emailID = "jamal@gmail.com"
var accountPassword = "12345"
let accountState;

accountCity = "peshawar"

// accountId = 11223 // can't over write const 

console.log(accountId)
 emailID = "jamal@yahoo.com"
 accountPassword = "121212"
 accountCity = "islamabad"
/*
prefer not to use var 
because of issue in block scope and function scope
*/

 console.table([emailID,accountPassword,accountCity,accountState])