const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filt = numArray.filter((num)=> (num > 4)) //Filter method

// In curly bracs we have to use retun keyword for return value
// let filtAgain = numArray.filter((num)=> {
//     return num > 4
// }) 

let newArray = []

numArray.forEach((num)=>{
    if(num > 4){
        newArray.push(num)
    }
})

console.log(newArray);


const booksInfo = [
    {
        name: "Book1",
        genre: "Programming",
        publish: 2004,
        version: 7,
        edition: 2023,
    },
    {
        name: "Book2",
        genre: "Maths",
        publish: 2022,
        version: 4,
        edition: 2023,
    },
    {
        name: "Book3",
        genre: "Programming",
        publish: 2014,
        version: 7,
        edition: 2023,
    },
    {
        name: "Book4",
        genre: "Maths",
        publish: 2014,
        version: 3,
        edition: 2023,
    },
    {
        name: "Book5",
        genre: "History",
        publish: 2012,
        version: 7,
        edition: 2023,
    },
    {
        name: "Book6",
        genre: "Story",
        publish: 2008,
        version: 4,
        edition: 2023,
    },
]

let newArrayInfo = booksInfo.filter((bk)=>(bk.publish > 2004));

newArrayInfo = booksInfo.filter((bk)=>{
    return bk.genre === "Programming"
});

newArrayInfo = booksInfo.filter((bk)=>{
    return bk.genre === "Programming" && bk.publish === 2014
});

console.log(newArrayInfo);
