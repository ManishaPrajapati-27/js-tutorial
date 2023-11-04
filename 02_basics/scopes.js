let a = 12;
const b = 27;
var c = 2001;

if (true) {
  let a = 19;
  const b = 10;
  // var c = 2004
//   console.log(b);
}

// console.log(c);

function one() {
  const website = "Portfolio";

  function two() {
    const username = "Manisha";
    console.log(username);
  }

  console.log(website);

  two();
}

one();


function one() {
  const website = "Portfolio";

  function two() {
    const username = "Manisha";
    console.log(username);
  }

  console.log(website);

//   two();
}

// one();


if(true){
    const username = "Manisha"
    if(username === "Manisha"){
        const website = "GitHub"
        console.log(`${username} is upload projects on ${website}`)
    }

    console.log(username)
}


//////////// function /////////////////

function addOne(num){
    return num + 2
}

console.log(addOne(4));

const addTwo = function (num){
    return num + 2
}

addTwo(5)