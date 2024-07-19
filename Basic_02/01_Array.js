
let arr=[1,2,3,4,5,6]

// console.log(arr);
// console.log(arr[2])

// arr.push(7)
// arr.push(8)
// arr.pop()

// const arr2=new Array(9,8,7,6,5,4)

// const arr3=arr.join()
// console.log(typeof arr3)    //String

// arr.unshift(9)  //it will shift all the elements
// console.log(arr)
// arr.shift()

// console.log(arr.includes(9))    //false

// console.log(arr.indexOf(5))

const arr4=arr.slice(2,4)   //this line of code only slice the element but no any changes in array
console.log(arr4)
console.log(arr)
const arr5=arr.splice(2,4)  //this line of code slice the element with given range and also manipulate the orginal array

console.log(arr5)
console.log(arr)
