let Dateu= new Date()
console.log(Dateu)
console.log(Dateu.toDateString(),Dateu.toLocaleString(),Dateu.toString())
let mydate= new Date("04-11-2024")
console.log(mydate.toLocaleString())
let myexpressdate= new Date(2024,10,4,9 ,30, 43)
console.log(myexpressdate.toLocaleString(),Math.trunc(Date.now()/1000) , mydate.getTime(), Dateu.setFullYear(2024), Dateu.getMonth()+1,)
//Months start from 0-11

console.log(`Today's date is ${Dateu.getDate()}`)

Dateu.toLocaleDateString('default',{weekday:"long"})