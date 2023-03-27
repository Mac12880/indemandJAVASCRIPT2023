// Activity P1
// function randColor(){
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// const btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//   const randomColor = randColor();
//   document.body.style.backgroundColor = randomColor;
//   const h1 = document.querySelector("h1");
//   h1.textContent = `${randomColor}`;
// });

// Activity P2
// const form = document.querySelector("form");
// const input1 = document.querySelectorAll("input1");
// const input2 = document.querySelectorAll("input2");
// const list = document.querySelector("#list");

// form.addEventListener("submit", function(e){
//   e.preventDefault();
//   const userInput1 = input1.value;
//   const userInput2 = input2.value;
//   const newLI = document.createElement("li");
//   newLI.innerText = `Product: ${userInput1}, Qty: ${userInput2}`;
//   list.append(newLI);
//   input.value = "";
// });


//JS CODE
// function addProductQty(){
//   let inputProduct = document.querySelector("#product");
//   let inputQty = document.querySelector("quantity");

//   let product = inputProduct.value;
//   let quantity = inputQuantity.value;
  
//   inputProduct.value = "";
//   inputQty.value = "";

//   let itemList = document.createElement("li")
//   itemList.textContent = quantity + " - " + product;

//   let productList = document.getElementById("productList");
//   productList.appendChild(itemList);

// }

// const form = document.querySelector("form");
// form.onclick = addProductQty;

//JS CODE
const submit = document.querySelector("#submit");
const ul = document.querySelector("#list")

submit.addEventListener("click", addProductQty);
function addProductQty(){
  let product = document.querySelector("#product");
  let quantity = document.querySelector("#quantity");

  ul.innerHTML = ul.innerHTML + `<li>${quantity.value} - ${product.value}</li>`;
  product.value = "";
  quantity.value = "";
}
