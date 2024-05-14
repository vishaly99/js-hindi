// const promiseOne=new Promise(function(resolve,reject){
//     //Do an aysnc task
//     //DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// const promiseTwo=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 is complete");
//         resolve();
//     },1000)
// })
// promiseTwo.then(function(){
//     console.log("Promise 2 consumed");
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 3 is complete");
//         resolve({username:"Vishal", email:"vishalyennam@gmail.com"})
//     })
// }).then(function(user){
//     console.log("Promise 3 consumed");
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"test", email:"test@gmail.com"})
//         }
//         else{
//             reject('Error: Something went wrong')
//         }

//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either reject or resolved");
// })

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"JS", email:"JS@gmail.com"})
//         }
//         else{
//             reject('Error: JS Something went wrong')
//         }

//     },1000)
// })

// async function consumePromiseFive(){
//     // const response=await promiseFive
//     // console.log(response)
//     try {
//             const response=await promiseFive
//     console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
//consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response=await fetch("https://api.github.com/users/hiteshchoudhary")
//     const data=response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

//getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))