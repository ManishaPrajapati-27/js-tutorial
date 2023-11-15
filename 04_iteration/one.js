// for (let index = 0; index < 20; index++) {
//     const element = index;
//     if(element === 7){
//         console.log("7 is the best number")
//     }
//     console.log(element)
// }

// for (let i = 1; i <= 5; i++) {
//     const element = i;
//     console.log(`Outer loop value is ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         const element = j;
//         console.log(`${i} * ${j} = ${i * j} `)
//     }
// }

let myArray = ["Rengoku", "Goku", "Anya", "Twilight", "Thorn Princes"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// Break after 7
// for (let index = 0; index <= 15; index++) {
//     if (index === 7){
//         console.log("7 is here stop the loop")
//         break
//     }
//     console.log(`The value is ${index}`)
// }

// Continue //Stop execution one time
for (let index = 0; index <= 15; index++) {
    if (index === 7){
        console.log("7 is here stop the loop")
        continue
    }
    console.log(`The value is ${index}`)
}