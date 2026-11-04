"strict";

const container = document.querySelector(".container");
const gridButton = document.querySelector(".new-grid-btn");

// Replaces the grid using the requested number of squares per side.
function createGrid(squaresPerSide) {
  const totalSquares = squaresPerSide * squaresPerSide;
  const squareSize = 480 / squaresPerSide;

  container.textContent = "";

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  }
}

createGrid(16);
