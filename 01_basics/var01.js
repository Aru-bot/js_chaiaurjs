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
// { } are called scopes. When we use 'var', it can cause confusion due to its function and block scope behavior, which is not helpful and in fact causes problems. Therefore, we use 'let'.
console.table([accountEmail,accountId,accountCity,accountpassword])