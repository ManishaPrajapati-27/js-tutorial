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
