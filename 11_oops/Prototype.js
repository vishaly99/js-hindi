// let myName="Vishal   ";
// let myChannel="Test   ";

// console.log(myName.trueLength)

let myHeros=["test","test1","test2","test3"];

let heroPower={
    test:"Test",
    test1:"Test1",
    getTestPower:function(){
        console.log(`test power is ${this.test}`);
    }
}

Object.prototype.vishal=function(){
    console.log(`vishal is present in all objects`)
}

Array.prototype.heyvishal=function(){
    console.log(`heyvishal is present in all objects`)
}

// console.log(heroPower.vishal());

// console.log(myHeros.vishal());

// console.log(myHeros.heyvishal());

//heroPower.heyvishal();

//Inheritance

const User={
    name:"test",
    email:"test@gmail.com"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Test   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}

console.log(anotherUsername.trueLength());
console.log("ice".trueLength());
console.log("base".trueLength());