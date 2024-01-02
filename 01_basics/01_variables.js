const accountId = 144553
let accEmail = "abhilas@gmail.com"
var accPass = "1234565"
accountCity = "Shimla"
let accState;
// accountId = 12// not allowed as constant can not be changed 
accEmail ="ab@ab.com"
accPass = "2121"
accountCity = "Jaipur"
console.log(accountId);
/*  ab var ko use nahi karte hai ab sirf let use karte hai beacuse of scope issue
console.table se tabular form me data aa jata hai. */
console.table([accountId,accEmail,accPass,accountCity,accState])

