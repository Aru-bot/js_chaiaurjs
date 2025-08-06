const accountId= 23100424
let accountEmail= "MeowSanghatan@gmail.com"
var accountpassword= "12345"
accountCity="Goa"
//accountId=2
console.log(accountId);
console.log(accountEmail);
console.log(accountpassword);
console.log(accountCity);
accountCity="Kitty Land"
//{ } are called scope hence when we use var it changes a lot due to confusion and it's use, and its block and functional scope is not helpful infact causes problems, hence we use let
console.table([accountEmail,accountId,accountCity,accountpassword])