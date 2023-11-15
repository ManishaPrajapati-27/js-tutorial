const age = 21

// if (condition) {
    
// }
// if (age > 18) {
//     console.log("You are adult")
// }


// const userLoggedIn = true

// if (7 == "7") {
//     console.log("Its same")
// }

// if (7 === "7") {
//     console.log("Its same")
// }else{
//     console.log("it's not same")
// }

// if(age <= 25){
//     let name = "Manisha"
//     console.log(`${name} is under 25`)
// }else{

//     console.log(`Else`)
// }

const score = 500;
// if (score < 1000) console.log("It is greater then 1000");
// if (score < 1000) console.log("It is greater then 1000") , console.log("its less then"); // Its not good

// if (score <= 500){
//     console.log("Heyy..1")
// }else if(score > 400){
//     console.log("Heyy..2")
// }else if(score < 1000){
//     console.log("Heyy..3")
// }

let userLogin = true;
let userDebit = true;
let userLoginGoogle = false;
let userLoginEmail = true;

if (userLogin && userDebit){
console.log("user Allow")
}

if (userLoginGoogle || userLoginEmail){
console.log("user is login")
}