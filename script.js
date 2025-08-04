function createGrid(size = 16) {
  const divContainer = document.querySelector(".div-container");
  divContainer.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    divContainer.appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createGrid();
});

const container = document.querySelector(".div-container");

container.addEventListener("mouseover", (e) => {
  e.target.setAttribute("style", "background: #888888");
});

function createNewCanvas() {
  let newSize = getUserInput();
  createGrid(newSize);
  passUserInput(newSize);
}

function getUserInput() {
  return +prompt("Please enter a grid size:", 16);
}

document.querySelector("#new-canvas").addEventListener("click", () => {
  createNewCanvas();
});

function passUserInput(param) {
  document.documentElement.style.setProperty("--size-input", param);
}
