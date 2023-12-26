const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// getOwnPropertyDescriptor = Gives the own property of Objects

console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const anime = {
    name: 'spy x family',
    series: 4,
    isAvailable: true,

    seeAnime: function(){   
        console.log("Nhi Dekha ye");
    }
}

console.log(Object.getOwnPropertyDescriptor(anime, "name"));

Object.defineProperty(anime, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(anime, "name"));

for (let [key, value] of Object.entries(anime)) {
    if (typeof value !== 'function') {  
        console.log(`${key} : ${value}`);
    }
}