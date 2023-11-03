// Single ton
// In we use object.create to create object

// Object Literals
// Simple Object

// Symbol in object
const myKey = Symbol("key1");

const object = {
  name: "Manisha",
  marks: 100,
  [myKey]: "4839GHJN79",
  age: 21,
  email: "manisha@google.com",
  isLoggedIn: true,
};

// console.log(object.marks)
// console.log(object["marks"])
// console.log(object["email"])
// console.log(object[myKey])
// console.log(object)

// For chage value
object.marks = 80;
// console.log(object)

//

object.myFuction = function () {
  console.log(`Hii.. hello.. Namaste`);
};

object.myFuction2 = function () {
  console.log(`Hii.. hello.. Namaste ${this.name}`);
};

// console.log(object.myFuction())
// console.log(object.myFuction2())

// /////////////////// More About Objects ////////////////////// //

// Single ton
// const tinderUser = new Object()

// Non singleton
const tinderUser = {};
// console.log(tinderUser)

tinderUser.name = "Rahul";
tinderUser.age = 23;
tinderUser.isLoggedIn = true;
tinderUser.date = 3;

// console.log(tinderUser)

const anotherTinderUser = {
  fullname: {
    name: {
      firstName: "Manisha",
      lastName: "Prajapati",
    },
  },
  age: 21,
  inLoggedIn: false,
};

// console.log(anotherTinderUser);
// console.log(anotherTinderUser.fullname.name.firstName);

let obj1 = { a: "2", b: "3" };
let obj2 = { c: "4", d: "5" };
let obj3 = { f: "6", e: "7" };

// Concatinate Objects
// let obj4 = Object.assign({}, obj1, obj2, obj3)
// For spread
let obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)


const numbers =[
    {
        num1: 2,
        num2: 2
    },
    {
        num1: 2,
        num2: 2
    },
    {
        num1: 2,
        num2: 2
    },
]

// console.log(numbers[1].num1)

console.log(tinderUser)
// For All key
console.log(Object.keys(tinderUser))
// For all values
// console.log(Object.values(tinderUser))

// All enteries in array form
// console.log(Object.entries(tinderUser))

// For check key is there or not
// console.log(Object.hasOwnProperty("name"))


// ////////// Object De-Structure Objects /////////// //

const games = {
  game1: "BGMI",
  game2: "Valorant",
  game3: "Pokemon Go",
  game4: "Temple run"
}

// console.log(games.game3)
const {game4: ga} = games
console.log(ga)


