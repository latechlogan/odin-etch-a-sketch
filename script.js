function createGrid(size = 16) {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    document.querySelector(".div-container").appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createGrid();
});

const container = document.querySelector(".div-container");

container.addEventListener("mouseover", (e) => {
  e.target.setAttribute("style", "background: #888888");
});
