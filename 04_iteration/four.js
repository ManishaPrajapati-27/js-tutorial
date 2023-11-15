const myObj = {
    js : "JavaScript",
    css : "Cascading Style Sheet",
    html : "Hyper text markup language",
    py : "Python",
    jsx : "JavaScript XMl"
}

for (const key in myObj) {
    // console.log(key) //Print the value of key object
}
for (const key in myObj) {
    // console.log(`${key} of value is ${myObj[key]}`) // For key and value
}

// for in loop in array
const arr = ["js", "py", "cpp", "html", "jsx"]

for (const key in arr) {
    // console.log(key);
    console.log(arr[key]);
}

// for in loop in map
const map = new Map()
map.set("IN", "India")
map.set("US", "United State")
map.set("Fr", "France")
map.set("ER", "Europe")
map.set("IT", "Itally")

for (const key in map) {
    console.log(key);
}