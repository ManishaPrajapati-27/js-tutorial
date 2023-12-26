// Promises in JS

// First Form
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve();
        // console.log("Hey I am Manisha. Stupid girl and very emotional");
    }, 2000);
})

// promiseOne.then(()=>{
//     console.log("Promise resolve")
// })


// Second Form
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve();
        console.log("Hey I am Manisha. Stupid girl and very emotional but I studied now JS it's really cool");
    }, 2000);
}).then(()=>{
    console.log("Promise resolve")
})


// Third Form
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username: "Manisha", password: "1234"});
        console.log()
    }, 2000);
})

promiseThree.then((user)=>{
    console.log(user)
})

// Four Form
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "Manisha", password: "1234"})
        } else {
            reject("Error: Something went wrong")
        }
    }, 2000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username) =>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Promise is Resolve or Rejected")
});


// Five Form
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "Manisha", password: "1234"})
        } else {
            reject("Error: Something went wrong")
        }
    }, 2000);
})

// async function consumePromiseFive(){
// const response = await promiseFive
// console.log(response);
// }  //This shows error if we are not using this code in catch


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive();

// async function getUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("Error:", error)
//     }
// }

// getUser();

fetch("https://api.github.com/users/ManishaPrajapati-27")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
