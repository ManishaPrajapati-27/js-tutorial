const date = new Date();

// console.log(date)
// console.log(date.toDateString())
// console.log(date.toLocaleString())
// console.log(date.toDateString())
// console.log(typeof date)
// console.log(date.getTime())

// let newDate = new Date(2023, 1, 11, 5, 33)
let newDate = new Date("01-11-2023");

// console.log(newDate);
// console.log(newDate.toLocaleString());

let timeStamp = Date.now();

// console.log(timeStamp);
// console.log(newDate.getTime());

// In seconds
// console.log(Math.floor(timeStamp/1000))

console.log(date.getMonth() + 1);
console.log(date.getDay());
console.log(date.getDate());

date.toLocaleString("default", {
  weekday: "short",
  day: "numeric",
});
