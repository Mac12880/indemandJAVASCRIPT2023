const allToDoList = [];
const activeToDoList = [];
const completedToDoList = [];



    

function addTodo(){
    const textBox = document.querySelector("#toDoInput").value
    allToDoList.push(textBox);
    console.log
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = items;
    ul.appendChild(li);
}