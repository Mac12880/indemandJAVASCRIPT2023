// Activity P1
function randColor(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const btn = document.querySelector("button");
btn.addEventListener("click", function(){
  const randomColor = randColor();
  document.body.style.backgroundColor = randomColor;
  const h1 = document.querySelector("h1");
  h1.textContent = `${randomColor}`;
});