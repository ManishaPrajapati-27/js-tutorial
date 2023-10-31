// Premitive DataTypes
// Number, Null, String, Symbol, Boolean, BigInit, Undefind

let num = 27; //Number
let str = "Its Manisha"; //String
let x = null; //Null
let m = 530934035456n; //BigInit
let num2; // undefind
let id = Symbol("3456"); //Symbol Give Unique value
const bool = true; //Symbol

// Non-Premitive
// Array, Objects, Function

const array = ["Manisha", "Rahul", 27, 45, true];
const object = {
  score: 200,
  string: "I am here",
  hero: "Saktiman",
};

const myFunction = function myFunction() {
  const bool = true;
  console.log("I am in Fun");
  console.log(bool);
};

// console.log()
myFunction();

console.log(typeof myFunction);

// // // // Stack and Heap // // //

// Stack => Give the copy of value (Its in Premitive)
// Heap => Reference original value (Its in Non-Premitive)

let myYoutube = "Play Gamerz M27";
let myYoutubeAnother = myYoutube;

myYoutube = "Play Games";

console.log(myYoutube);
console.log(myYoutubeAnother);

let heros =  {
 hero1: "shaktiman",
 hero2: "Goku",
 hero3: "Rengoku",
 hero4: "Tomioka"
}

let herosAnother = heros

heros.hero3 = "Tanjirou"

console.log(heros);
console.log(herosAnother);
