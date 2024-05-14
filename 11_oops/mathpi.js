// const value=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(value);

// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

const test = {
    name: 'test1',
    price: 250,
    isAvailable: true,

    ordertest:function(){
        console.log("ordertest function");
    }
}
console.log(test);

console.log(Object.getOwnPropertyDescriptor(test, "name"));

// Object.defineProperty(test, "name", {
//     enumerable: false,
//     writable: false
// })
// console.log(Object.getOwnPropertyDescriptor(test, "name"));

// test.name="test2";
// console.log(test)

for (let [key,value] of Object.entries(test)) {
    if(typeof value!=='fucntion'){
        console.log(`${key} : ${value}`)
    }  
    
}