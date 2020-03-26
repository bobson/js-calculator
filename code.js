//function calculate() {
//var bttContent = [],last;

const screen = document.querySelector(".screen");
var bttContent = [];

function init() {
  bttContent = [];
  screen.textContent = 0;
}

function rerender() {
  screen.textContent = bttContent.join("");
  last = bttContent[bttContent.length - 1];
}

function makeOperation() {
  bttContent = eval(bttContent.join(""));
  bttContent = Array.from(bttContent.toString());
  rerender();
}

function deleteLast() {
  bttContent.pop();
  if (bttContent.length !== 0) {
    rerender();
  } else {
    screen.textContent = 0;
  }
}

function addItem(e) {
  if (e === "=") {
    makeOperation();
  } else if (e === "<") {
    deleteLast();
  } else if (e === "C") {
    init();
  } else {
    bttContent.push(e);
    rerender();
  }
}
document.querySelector(".tab-btt").addEventListener("click", e => {
  addItem(e.target.textContent);
});
// }

// calculate();
