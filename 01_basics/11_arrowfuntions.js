const user={
    username:"vishal",
    price:699,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to webiste`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

// console.log(this)

//we can use this keyword only in object not in funtions
// function chai(){
//     let username="vishal";
//     console.log(this.username)
// }
// chai()

// const chai=function (){
//     let username="vishal";
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "vishal"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()