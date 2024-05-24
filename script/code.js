let arr1 = [1, 4, 5]
// let arr2 = [...arr1]
let arr2 = Array.from(arr1) // Array.from is copying all the elements from array1 to array2
arr2[0] = 10
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
// shallow copy 
// deep copy creates a new array
// console.log(...arr1); // ... is called a spread operator or making a copy of one array to another array.
console.log("Our lecturer's name is Joel");