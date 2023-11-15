const numArray = [1, 2, 3, 4, 5, 6, 7];

// const myTotal = numArray.reduce((acc, curr)=>{
//     console.log(`Accumulator : ${acc} , Current value : ${curr}`);
//     return acc + curr;
// }, 2)

const myTotal = numArray.reduce((acc, curr)=>(acc + curr), 2)

console.log(myTotal);

const myObjArray = [
    {
        course : "JavaScript",
        price: 699
    },
    {
        course : "Python",
        price: 599
    },
    {
        course : "Java",
        price: 999
    },
    {
        course : "Django",
        price: 799
    },
    {
        course : "CSS",
        price: 699
    },
]

const totalPrice = myObjArray.reduce((acc, curr)=> acc + curr.price, 0);

console.log(totalPrice);