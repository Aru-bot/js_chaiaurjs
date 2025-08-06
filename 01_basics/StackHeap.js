// Stack is Primitive and Heap is non primitive(when change is made it is done in the original value)
let x = 10;           // x stored in stack
let y = x;            

y = 20;
console.log(x);       

let obj1 = { a: 1 };  //get reference
let obj2 = obj1;      

obj2.a = 99;
console.log(obj1.a);  

