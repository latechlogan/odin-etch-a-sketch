function createGrid(size = 16) {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    document.querySelector(".div-container").appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createGrid();
});
