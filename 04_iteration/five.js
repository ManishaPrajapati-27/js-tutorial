const arr = ["js", "py", "cpp", "html", "jsx"]

arr.forEach( function (item){
    // console.log(item);
})
arr.forEach( (item) => {
    // console.log(item);
})

function print(item){
    // console.log(item)
}

// arr.forEach(print)

arr.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const information = [
    {
        language: "JavaScript",
        languageFileName: "js",
    },
    {
        language: "Java",
        languageFileName: "java",
    },
    {
        language: "python",
        languageFileName: "py",
    },
    {
        language: "c++",
        languageFileName: "cpp",
    },
    {
        language: "Cascading Style Sheet",
        languageFileName: "css",
    }
]

information.forEach( (item) => {
    console.log(item.language);
})