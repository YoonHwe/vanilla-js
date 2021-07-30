const html = document.querySelector("html");
const hello = document.querySelector("h1");
hello.style.color = "white";
function windowSizeChange() {
  if (window.innerWidth < 600) {
    html.style.backgroundColor = "blue";
  } else if (window.innerWidth >= 600 && window.innerWidth < 900) {
    html.style.backgroundColor = "purple";
  } else {
    html.style.backgroundColor = "yellow";
  }
}
window.addEventListener("resize", windowSizeChange);
