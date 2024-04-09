//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId)

const bigNumber=123456789123n



// Reference (Non primitive)

// Array, Objects, Functions
const heros=["hero1","hero2","hero3"]

let myObj={
    name:"hitesh",
    age:22
}

const myfunction=function(){
        console.log("Hello")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myObj)
console.log(typeof myfunction)
console.log(typeof anotherId)