const toDoList = [];
const ul = document.querySelector("ul");
toDoList.forEach((names) => {
    const li = document.createElement("li");
    li.textContent = names;
    ul.appendChild(li);
});


