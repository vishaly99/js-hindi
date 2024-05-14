//ES6

// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}asd`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const test=new User("test","test@gmail.com","test")
// console.log(test.encryptPassword())
// console.log(test.changeUsername())

//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const test1=new User("test1","test1@gmail.com","test1")
console.log(test1.encryptPassword())
console.log(test1.changeUsername())