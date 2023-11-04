const myFuntion = function () {
  console.log("It is first function");
};

// myFuntion()
// console.log(myFuntion())

// In function() = under parentheses values in Parameter

const sumNumbers = function (num1, num2) {
  // let result = num1+num2;
  return num1 + num2;
  // return result;
};

// In sumNumbers() = under parentheses values is after call function it is arguments
// console.log(sumNumbers(10, 20))

let result = sumNumbers(10, 20);
console.log("result :", result);

function loginUser(username) {
  if (!username) {
    console.log("Please enter username");
  }
  return `${username} just logged in the website.`;
}

// console.log(loginUser("Manisha"))
// console.log(loginUser())

/////////////////////////// More in Funtions /////////////////////////////

//  ... Spread Operator or Rest Operator
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(100, 200, 300, 400, 700));

const object = {
  username: "Manisha",
  age: 21,
};

function valueFromObject(anyobject) {
  console.log(`${anyobject.username} is ${anyobject.age} year old.`);
}

// valueFromObject(object);
valueFromObject({
  username: "Manisha",
  age: 21,
});

const Array = [100, 200, 300, 400, 700];

function myArray(anyArray) {
//   return anyArray;
  return anyArray[2];
}

// console.log(myArray(Array));
console.log(myArray([100, 300, 400, 600]));
