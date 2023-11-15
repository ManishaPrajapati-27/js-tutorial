let mail = "man@gmail.com"

if (mail){
    console.log("Got the mail")
}else{
    console("Not find mail")
}


// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN // Except this all values in truth

// truthy values
// " ", "false", "0", [], {}, function(){}

let data = []

if (data.length === 0){
    console.log("Data array is empty")
}


let objectData = {}

if ((Object.keys(objectData)).length === 0){
    console.log("Data Object is empty")
}

// false = 0
// true
// false = ""
// true
// 0 = ""
// true

// Nullish coalescing operator (??)

let score;
// score = 80;
// score = 80 ?? 100;
// score = null ?? 70;
// score = undefined ?? 70;
// score = null ?? 70 ?? 40;

// console.log(score)

// Terniary opertaor

// condition: true ? false

let value = 60;

value <= 100 ? console.log("less then 100") : console.log("more then 100");

