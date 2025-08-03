document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 16 * 16; i++) {
    let div = document.createElement("div");
    document.querySelector(".div-container").appendChild(div);
  }
});
