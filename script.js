"strict";

const container = document.querySelector(".container");
const gridButton = document.querySelector(".new-grid-btn");

// Replaces the grid at the requested resolution while keeping the drawing area at 480 × 480 pixels.
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

    let interactions = 0;
    square.style.opacity = 0;

    // Increase opacity with each random color, reaching full opacity after ten entries.
    square.addEventListener("mouseenter", () => {
      if (interactions >= 10) return;

      interactions += 1;

      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      square.style.opacity = interactions / 10;
    });
  }
}

createGrid(16);

// Validates the requested size before replacing the grid; canceled or invalid input preserves the drawing.
gridButton.addEventListener("click", () => {
  const userInput = prompt(
    "How many squares per side? Enter a number from 1 to 100",
  );
  if (userInput === null) return;

  const squaresPerSide = Number(userInput);

  if (
    !Number.isInteger(squaresPerSide) ||
    squaresPerSide < 1 ||
    squaresPerSide > 100
  ) {
    alert("Enter a whole number from 1 to 100.");
    return;
  }
  createGrid(squaresPerSide);
});
