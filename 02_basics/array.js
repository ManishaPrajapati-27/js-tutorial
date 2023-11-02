const array = [1, 4, 5, 7, 8, 9];

// array.push(10)
// array.pop()
// array.unshift(2)
// array.shift()

// console.log(array.includes(3))
// console.log(array.indexOf(7))

// console.log(array.join());

// console.log(array)

let newArr = array.slice(2, 6);
// console.log(newArr)

// Splice change the original array
let newArr2 = array.splice(2, 6);
// console.log(array);
// console.log(newArr2)

// // // // // // More About Array // // // // // //

const heros = ["Superman", "Shaktiman", "Batman", "Ironman", "Thor"];
const slayers = ["Tanjirou", "Ineskou", "Zenitsou", "Tomiaka", "Orakodaki"];

// heros.push(slayers)
// console.log(heros)

// Create New array concatinate array
// let newHeros = heros.concat(slayers)
// console.log(newHeros)

// Spread all array and create new array
let newHeros = [...heros, ...slayers];

console.log(newHeros);

let array2 = [1, 2, 3, 4, 5, [6, 7, 8], [4, 6, 4, 2, 5, [6, 7]]];

// Flat all array and create new simple array.
let anotherArray = array2.flat(3)
console.log(anotherArray);

// Check it's array or not
console.log(Array.isArray("Heyy..."))

// Convert in array
console.log(Array.from("Heyy..."))

// Show empty array it's not converted
console.log(Array.from({welcome: "Heyy..."}))

let marks1 = 100
let marks2 = 200
let marks3 = 300
let marks4 = 400

// Create in array of variables
console.log(Array.of(marks1, marks2, marks3, marks4))
