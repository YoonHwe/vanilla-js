// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const superEventHandler = {
  func1: function mouseOn() {
    hello.style.color = colors[0];
    hello.innerText = "The mouse is here!";
  },
  func2: function mouseDown() {
    hello.style.color = colors[1];
    hello.innerText = "The mouse is gone!";
  },
  func3: function windowResize() {
    hello.style.color = colors[2];
    hello.innerText = "You just resized!";
  },
  func4: function mouseClick() {
    hello.style.color = colors[3];
    hello.innerText = "That was right click!";
  }
};

const hello = document.querySelector("h2");

hello.addEventListener("mouseover", superEventHandler.func1);
hello.addEventListener("mouseleave", superEventHandler.func2);
window.addEventListener("resize", superEventHandler.func3);
hello.addEventListener("mousedown", superEventHandler.func4);
