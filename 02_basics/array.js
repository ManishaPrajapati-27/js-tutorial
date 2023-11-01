const array = [1, 4, 5, 7, 8, 9];

// array.push(10)
// array.pop()
// array.unshift(2)
// array.shift()


// console.log(array.includes(3))
// console.log(array.indexOf(7))

// console.log(array.join());

console.log(array)

let newArr = array.slice(2, 6)
console.log(newArr)

// Splice change the original array
let newArr2 = array.splice(2, 6)
console.log(array);
console.log(newArr2)