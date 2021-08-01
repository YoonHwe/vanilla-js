const inputNumber = document.querySelector("#input_number");
const guessNumber = document.querySelector("#guess_number");
const headerInfo = document.querySelector("h4");
const headerResult = document.querySelector("h5");
const btn = document.querySelector("#button_play");


btn.addEventListener("click", getNumber);
function getNumber() {
  const inputNumberInt = parseInt(inputNumber.value);
  const guessNumberInt = parseInt(guessNumber.value);
  const answerNumber = Math.floor(Math.random() * inputNumberInt);
  headerInfo.innerText =
    "You choose " + guessNumberInt + ", the machine choose " + answerNumber;
  if (guessNumberInt === answerNumber) {
    headerResult.innerText = "You win!";
  } else {
    headerResult.innerText = "You lost!";
  }
}
