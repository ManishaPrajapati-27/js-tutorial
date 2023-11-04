const user = {
    username: "Manisha",
    age: 21,
    welcomeMessage : function(){
        return (`${this.username} welcome to our channnel.`)
    }
    
}
// this key word in used in objects only
console.log(user)
user.username = "Rahul"
console.log(user.welcomeMessage())

function one (){
    console.log(this)
}

one()

// Arrow funtion give the empty object
const two = () =>{
    console.log(this)
}

two()

// But in console this gives the object

//// Arrow funtion /////


// const three = (num1, num2) =>{
//     return num1 + num2
// }
// const three = (num1, num2) => num1 + num2
const three = (num1, num2) => (num1 + num2)

console.log(three(3,7))