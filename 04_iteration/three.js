// const myArray = [1, 2, 3, 4, 5, 6, 7]

// for (const num of myArray) {
//     console.log(`Numbers of array is ${num}`)
// }

const myString = "Manisha"

for (const string of myString) {
    console.log(`Numbers of array is ${string}`)
}

// Maps
// Value are unique not duplicates
const map = new Map()
map.set("IN", "India")
map.set("US", "United State")
map.set("Fr", "France")
map.set("ER", "Europe")
map.set("IT", "Itally")

console.log(map);

// for (const maps of map) {
//     console.log(maps)
// }

// For print maps in array form with key value
for (const [key, value] of map) {
    console.log(key , ":" , value)
}

const myObj = { 
    game1 : "BGMI",
    game2 : "Pokemon Go"
} 

for (const [key, value] of myObj) {
    console.log(key , ":" , value)
} // Its not work in Objects // Not iterable

