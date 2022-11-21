const buttons = document.querySelector("button");

buttons.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const colors = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = colors;

  h1.innerText = colors;
});

const h1 = document.querySelector("h1");