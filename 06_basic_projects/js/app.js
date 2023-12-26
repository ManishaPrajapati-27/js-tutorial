// Color Changer
const buttons = document.querySelectorAll(".button");
const changeBody = document.querySelector(".color-changer");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "color1":
        changeBody.style.backgroundColor = "rgb(16, 227, 255)";
        break;
      case "color2":
        changeBody.style.backgroundColor = "rgb(16, 255, 56)";
        break;
      case "color3":
        changeBody.style.backgroundColor = "rgb(255, 159, 16)";
        break;
      case "color4":
        changeBody.style.backgroundColor = "rgb(255, 16, 215)";
        break;
      case "color5":
        changeBody.style.backgroundColor = "rgb(255, 16, 88)";
        break;
      case "color6":
        changeBody.style.backgroundColor = "rgb(16, 255, 155)";
        break;
      case "color7":
        changeBody.style.backgroundColor = "rgb(231, 255, 16)";
        break;
      case "color8":
        changeBody.style.backgroundColor = "rgb(255, 24, 16)";
        break;
      case "color9":
        changeBody.style.backgroundColor = "rgb(16, 92, 255)";
        break;
      case "color10":
        changeBody.style.backgroundColor = "rgb(120, 16, 255)";
        break;
    }
  });
});


// BMI Calculator

const form = document.querySelector(".form")
const formBmi = () =>{
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("result");
    const resultRange = document.getElementById("resultRange");
  
    if(height === " " || height < 0 || isNaN(height)){
      result.innerHTML = `<h4> Please add the valid number ${height} </h4>`
    }else if(weight === " " || weight < 0 || isNaN(weight)){
      result.innerHTML = `<h4> Please add the valid number ${height} </h4>`
    }else{
      const bmi = (weight / ((height * height)/10000)).toFixed(2)
      result.innerHTML = `<h4> BMI : ${bmi} </h4>`
      if (bmi < 18.5) { 
        resultRange.innerHTML = `<h4> You are in the underweight range </h4>`;
      } else if (bmi >= 18.5 && bmi <= 25.0) {
          resultRange.innerHTML = `<h4> You are in the healthy weight range </h4>`;
      } else if (bmi > 25.0 && bmi <= 29.9) {
          resultRange.innerHTML = `<h4> You are in the overweight range </h4>`;
      } else {
          resultRange.innerHTML = `<h4> You are in the obese range </h4>`;
      }
    }
  })
}


// Digital Clock

const digiClock = () =>{
  const clock = document.querySelector(".digital-clock .clock");
  
  // let date = new Date()
  // console.log(date.toLocaleTimeString());
  
  setInterval(()=>{
    let date = new Date()
    clock.innerHTML = `<h4>${date.toLocaleTimeString()}</h4>`
  }, 1000)
}

// Guess Number

const guessNumber = () =>{
  let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById("subBtn");
const userInput = document.querySelector(".input-num");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".attemts");
const lowOrHigh = document.querySelector(".low-or-high");
const startOver = document.querySelector(".info");
const alertMsg = document.getElementById("alert-ms");

const button = document.createElement("button");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess);
  })
}

validateGuess = (guess) =>{
  if(isNaN(guess)){
    alertMsg.innerHTML = "Please enter a valide number";
  }else if(guess < 1 ){
    alertMsg.innerHTML = "Please enter a number greater then 1";
  }else if(guess > 100 ){
    alertMsg.innerHTML = "Please enter a number less then 100";
  }else{
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess();
      displayMessage(`Game over Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

checkGuess = (guess) =>{
  if(guess === randomNum){
    displayMessage(`You guess the right number well done.`)
    endGame();
  }else if(guess < randomNum){
    displayMessage(`Number is Tooo Low`)
  }else if(guess > randomNum){
    displayMessage(`Number is Tooo High`)
  }
}

displayGuess = (guess) =>{
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

displayMessage = (message) =>{
  lowOrHigh.innerHTML = `${message}`
}

endGame = () =>{
  userInput.value = "";
  userInput.setAttribute("disabled", "")
  button.classList.add("button");
  button.innerHTML=`<span id="newGame">Start new Game</span>`;
  startOver.appendChild(button);
  playGame = false;
  newGame();
}

newGame = () =>{
const newGameButton = document.querySelector("#newGame");
newGameButton.addEventListener("click", ()=>{
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = "";
  remaining.innerHTML = `${11 - numGuess}`
  userInput.removeAttribute("disabled");
  startOver.removeChild(button);
  playGame = true;
})
}
}

// Unlimited Color

const unlimitedColor = () =>{
  const randomColor = () =>{
    const hexColor = "0123456789ABCDEF";
    let color = "#";
    for(i = 0; i < 6; i++ ){
      color += hexColor[Math.floor(Math.random() * 16)]
    }
    return color;
  }
  
  console.log(randomColor());
  
  let intervalColor;
  const startChangeColor = () =>{
    changeColor = () =>{
      document.body.style.backgroundColor = randomColor();
    }
    if(!intervalColor){
      intervalColor = setInterval(changeColor, 1000)
    }
  }
  
  const stopChangeColor = () =>{
   clearInterval(intervalColor)
   intervalColor = null;
  }
  
  document.querySelector("#start").addEventListener("click", startChangeColor)
  document.querySelector("#stop").addEventListener("click", stopChangeColor)
}

// Keyboard

const keyBoard = () =>{
  const insert = document.getElementById("insertKey");

  window.addEventListener("keydown", (e) =>{
    console.log(e);
    insert.innerHTML = `
    <div class = "color">
      <table>
        <tr>
          <th>Key</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
    `
  })
}


// Github Info

const requestURL = "https://api.github.com/users/ManishaPrajapati-27";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.onreadystatechange = () => {
  const gitInfo = document.querySelector(".github-info .info")
if (xhr.readyState === 4) {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText); // Parse the response text to JSON
        console.log(data);
        console.log(typeof data)
        console.log(data.followers);
        gitInfo.innerHTML = `
        <div class="image">
            <img src=${data.avatar_url} alt="">
        </div>
        <h4>${data.name}</h4>
        <div class = "info-in">
        <p>Followers : ${data.followers}</p>
        <p>Following : ${data.following}</p>
        </div>
        <p>${data.location}</p>
        `

    } else {
        console.error('Request failed with status:', xhr.status);
    }
}
};
xhr.send();



