const symbuool=Symbol("key1")
const user= {name:"Maau",age:20,location:"KittyLand",isloggedin:["Monday","Thursday"]
    ,[symbuool]:"Kuchu"
}


user.greeting= function(){
    console.log("Hi")
}
user.greeting2= function(){
    console.log(`Hi, ${this.name}`) //refering
}
console.log(user.greeting()) //with () gives undefined and without gives reference that it is a function
user.name="Bilei"
console.log(user.greeting2())
Object.freeze(user)
//constructor using Object.create
console.log(user.age)
console.log(user["location"])
console.log(user[symbuool])

console.log(user)
//we have to use double qoute here and not dor becasue if we will keep value in double quotes it can nt=ot be accessed with dot






/*2 types to declare objects, literals and constructors
when declared as literals they do not form singletons or else with constructors they do*/





//************SINGLETON*************
//One object can be made here and always returns the same one

const tinder= new Object()
tinder.id="2310abc"
tinder.name="A Maau"
tinder.isloggedin=false
console.log(tinder)

const tinderuser={
    email:"kuchipuchi@gmail.com",
    fullname:{
        userfirstname:{
            firstname:"Maau",
            middlename:"hamster"
        },
        userlastname:"Bhow"
    }
}

console.log(tinderuser.fullname.userfirstname.middlename)

const obj1= {1: "a", 2:"b"}

const obj2= {3: "c", 4:"d"}

// we use {} because guarantess it is merged,first that is {} as target, other as source
console.log(Object.assign({},obj1,obj2),{...obj1,...obj2} )

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('name'))




//Destructuring
const course={name:"js",price:0,instructor:"hitesh chowdhury"}

const {name:yt} = course
console.log(yt)

//************APIs**************

//{name:"js",price:0,instructor:"hitesh chowdhury"}
//[{}]// array format


