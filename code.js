const button = document.getElementById("button");
const colorBox = document.getElementById("color");
let body = document.body;

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  colorBox.innerText = hexColor;
  body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 6);
}
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText = colorBox;
});
