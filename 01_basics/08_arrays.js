//array

// const myArray1=[1,2,3,4,5,true]
// const myArray2=["test1","test2"]

//console.log(myArray1)
//console.log(myArray1[1])

//array methods

//myArray1.push(6)
//myArray1.push(7)
//myArray1.pop()
//myArray1.unshift(0)
// myArray1.shift()
// console.log(myArray1)

//slice, splice

// console.log("A",myArray1)

// const myn1=myArray1.slice(1,3)
// console.log(myn1)

// console.log("B",myArray1)

// const myn2=myArray1.splice(1,3)
// console.log("C",myArray1)

// console.log(myn2)

// const test1=["asd","qwe","ert"]
// const test2=["mbn","kjl","oiu"]

// test1.push(test2)
// console.log(test1)
// console.log(test1[3][1])

// const test3=test1.concat(test2)
// console.log(test3)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)

console.log(real_another_array)