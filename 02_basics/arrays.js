const Arr= [1,2,3,4,6,"kuchi", "pucha",true]
//Mutable
//Shalwo copy means they share same reference and when change is made it changes here as well
//deepc opy means they do not share the same reference and when copy is made it does not hamper principal input
const myarray= new Array(2,3,6,2,"dhala","gelhi",false)

console.log(Arr.concat(myarray)) // to merge 2 arrays as 1
const kuchipuni = [...myarray,...Arr] // to merge 2 arrays as 1
console.log(kuchipuni)


//methods

console.log(Arr)
console.log(Arr.push("susu","karidela"), Arr.pop(),Arr.unshift("kahinki"),Arr.includes(4),Arr.indexOf(-34),Arr.join(),Arr.slice(4,8),Arr.splice(3,7),Array.isArray(Arr),Array.from("DHALLA BUNNY"),Array.from({name:"Bilei"}))

//unshift starts at first 
//Arr.join() gives typeOF as string
//differnce between slice and splice is that splice manipulates the original array and slice does not
//when we use .push( ) with 2 arrays it becomes an eement whereas it has array
 //The push() method returns the new length of the array, not the array itself.

 //Array.from({name:"Bilei"} gives empty

const arrnew= [2,3565,14,6,[3,34,34],6,57,[74,4,79],3,3,6,['r',1,2,],6,78,7,"tw",["eg","e35","huh","HTMLFieldSetEleme"]]

console.log(arrnew)

console.log(arrnew.flat(Infinity))

let sc1=10
let sc2=20
let sc3=30
console.log(Array.of(sc1,sc2,sc3))