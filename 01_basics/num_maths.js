const num = 27

const anotherNum = new Number(27)

// console.log(num)
// console.log(anotherNum)

// To String
// console.log(anotherNum.toString())

// To fixed num as (27.00)
// console.log(anotherNum.toFixed(2))

// To Precision
// console.log(anotherNum.toPrecision(1)); //3e+1 (Go in exponential if value number is greater then precision value)

const n = 278493902
// console.log(n.toLocaleString()); // In Us Standard
// console.log(n.toLocaleString('en-IN')); // In India Standard

// // // // Maths // // // //

console.log(Math)

// convert negative value to positive
console.log(Math.abs(-2))

// Square root
console.log(Math.sqrt(5))

// Power 
console.log(Math.pow(5,4))

// Round Give the Proper number
console.log(Math.round(45.856))

// Give without decimal number as decimal point
console.log(Math.ceil(45.856))

// Give without decimal number less one
console.log(Math.floor(45.656))

// Give random value
console.log(Math.random()) 
console.log(Math.random()*10) 
console.log((Math.random()*10)+1) 

let min = 20
let max = 30

console.log(Math.random() * (max-min+1) + min);
console.log(Math.floor(Math.random() * (max-min+1) + min));
