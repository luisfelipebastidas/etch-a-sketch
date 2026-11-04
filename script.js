"strict";

const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  square.addEventListener("mouseenter", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
}
