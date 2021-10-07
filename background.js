const leoMesssi = [
  "messi1.jpeg",
  "messi2.jpeg",
  "messi3.jpeg",
  "messi4.jpeg",
  "messi5.jpeg",
  "messi6.jpeg",
  "messi7.jpeg",
];

const button = document.querySelector("button");
const body = document.querySelector("body");
function getRandomImage() {
  body.style.backgroundImage =
    `url(${leoMesssi[Math.floor(Math.random() * leoMesssi.length)]})`;
  // body.style.backgroundImage = '-moz-linear-gradient(colors[Math.floor(Math.random()*colors.length)], colors[Math.floor(Math.random()*colors.length)]);
}
button.addEventListener("click", getRandomImage);