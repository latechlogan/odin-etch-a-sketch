// CONFIG

const DEFAULT_GRID_SIZE = 16;
const HOVER_COLOR = "hsla(0, 0%, 56%, 1)";

// MAIN FUNCTIONS

function createCanvas(size = DEFAULT_GRID_SIZE) {
  const divContainer = document.querySelector(".div-container");
  divContainer.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    divContainer.appendChild(div);
  }

  document.documentElement.style.setProperty("--size-input", size);
}

function createNewCanvas() {
  let newSize = getUserInput();
  if (newSize !== null) {
    // proceed if user didn't cancel
    createCanvas(newSize);
  }
}

function resetCanvas() {
  const pixels = document.querySelectorAll(".pixel");
  setTimeout(() => {
    pixels.forEach((pixel) => pixel.classList.remove("dark"));
  }, 410);

  animateCanvas();
}

function animateCanvas() {
  const divContainer = document.querySelector(".div-container");
  divContainer.classList.add("animate");
  setTimeout(() => {
    divContainer.classList.remove("animate");
  }, 820);
}

function getUserInput() {
  const input = prompt("Please enter a grid size:", DEFAULT_GRID_SIZE);

  if (input === null) return null; // user cancelled

  const size = +input;

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return getUserInput(); // try again
  }

  return size;
}

function handlePixelHover(event) {
  event.target.classList.add("dark");
}

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  createCanvas();
});

document.querySelector("#new-canvas").addEventListener("click", () => {
  createNewCanvas();
});

document.querySelector("#reset-canvas").addEventListener("click", () => {
  resetCanvas();
});

document.querySelector(".div-container").addEventListener("mouseover", (e) => {
  handlePixelHover(e);
});
