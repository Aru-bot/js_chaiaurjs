let score= "10"
let another= "Maau23"
console.log(typeof score) 
let number= Number(score)
console.log(typeof number) 
console.log(number)
console.log(typeof another) 
let second= Number(another)
console.log(typeof second) 
console.log(second)//NaN (Not a Number, because "Maau23" cannot be converted to a number) but it's type is a number.
//bOOLEAN IN 1-TRUE AND 0-FALSE
let booleanTester=["Maau",0,12,null]
for(let i=0; i<booleanTester.length; i++)
console.log(Boolean(booleanTester[i]))

let sTringNumb= String(23)
console.log(sTringNumb) // "23" its typeof is string
console.log(typeof sTringNumb) // "string"













//*****Operations*****


console.log(+true) // 1 but true+ is error but +"" is 0
console.log(+false) // 0
 
//Primitve means that it is not an object and has no methods
//Primitives are immutable, meaning they cannot be changed, but can be reassigned
//Primitives are passed by value, meaning that when you assign a primitive to a variable
// or pass it to a function, a copy of the value is made
//non-primitive means that it is an object and has methods
//Non-primitives are mutable, meaning they can be changed
//Non-primitives are passed by reference, meaning that when you assign a non-primitive to a variable
// or pass it to a function, a reference to the object is made, not a copy of the value
//Primitives are stored in the stack, while non-primitives are stored in the heap

const Arrays=["Spiderman", "Batman", "Superman"]
let Objects={
    name: "Spiderman",
    age: 25,
    city: "New York"
}
const myfunction=function(){
    console.log("Hello World")
}   

//typeof functions are object functions

