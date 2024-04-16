//singleton

//Object create
//Object literals

// const mySym=Symbol("key1")

// const Jsuser={
//     name:"test",
//     "full name":"test test",
//     [mySym]:"mykey1",
//     age:23,
//     location:"surat",
//     email:"test@gmail.com",
//     isLoggedIn:false,
//     lastLoginDay:["Monday","Saturday"]
// }
// console.log(Jsuser.age)
// console.log(Jsuser["age"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

// Jsuser.email="test123@gmail.com"
// Object.freeze(Jsuser)
// Jsuser.email="test@gmail.com"
// console.log(Jsuser.email)

// const tinderUser=new Object() this is singleton object
const tinderUser={} //this is a nonsingleton object

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularuser={
    email:"test@mail.com",
    fullname:{
        userfullname:{
            firstname:"test",
            lastname:"test123"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//console.log(obj3)
const obj3=Object.assign(obj1,obj2)
console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))