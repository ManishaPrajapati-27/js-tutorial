const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map function
// const newArray = numArray.map((num) => num + 10);
// console.log(newArray);

// Chaining

const newArray = numArray
  .map((num) => num + 10)
  .map((num) => num * 2)
  .filter((num) => num >= 35);
console.log(newArray);
