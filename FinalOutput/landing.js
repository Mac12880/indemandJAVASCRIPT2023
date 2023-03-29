const submit = document.querySelector("#submit");
const todoListElem = document.querySelector("#list");
const clickToDo = document.querySelector("#clickMe");
const activateToDo = document.querySelector("#activateToDo");
let getname;

// Button to go to the top
// Get the button
let mybutton = document.getElementById("myBtnToTop");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}











































clickToDo.addEventListener("click", clToDo);
    
function clToDo(){
    activateGetName.style.display = "block";
    location.href = "#inputName";
    getname = document.querySelector("#getName");
    if(getname.value == "" || getname.value == null || getname.value.length <= 1){
        alert("Input a valid name!");
    }
    else{
      var popup;
      const send = document.querySelector("#submitBtn");

      send.addEventListener("click", function (event) {
          popup = window.open ("main.html", "Popup", "width=400,height=300");
          if (popup != null && !popup.closed) {
            var name = popup.document.getElementById("inputName");
            greeting.innerHTML = document.getElementById("inputName").value;
            popup.focus();
          } 
          else {
            alert ("Popup has been closed. ");
          }
      });
    }
        
}



// function clToDo(){
//     getname = prompt("Enter your name!");
//     if(getname == "" || getname == null || getname.length <= 1){
//         alert("Input a valid name!");
//     }
//     else{
//         const greetname = document.querySelector("#greeting");
//         greetname.appendChild(document.createTextNode(`Hi ${getname}!`));
//         document.body.appendChild(greetname);
//         console.log(getname);
//         location.href = "#greeting";
//         setTimeout(showTodoSection, 3000);
//     }
//     function showTodoSection(){
//         activateToDo.style.display = "block";
//         location.href = "#list";
//     }
        
// }


