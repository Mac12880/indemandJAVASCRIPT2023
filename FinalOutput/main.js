const submit = document.querySelector("#submit");
const ul = document.querySelector("#list")


// function addTodo(){
//     const textBox = document.querySelector("#toDoInput").value
//     if(textbox != null){
//         allToDoList.push(textBox);
//         console.log
//         const ul = document.querySelector("ul");
//         const li = document.createElement("li");
//         li.textContent = items;
//         ul.appendChild(li);
//     }
    
    
// }
// let activeTodoList = [];
// let completedTodoList = [];
submit.addEventListener("click", function (event) {
    event.preventDefault();
    addTodo();
});


// function addTodo(){
//     let toDo = document.querySelector("#toDoInput");
//     console.log(toDo.value);
//     if(toDo.value == ""){ // add remove similar todo 
//         alert("You didn't enter a task!");
//     }
//     else{
//         activeTodoList.push(toDo.value)
//         console.log(activeTodoList);
//         ul.innerHTML = ul.innerHTML + 
//         `<li><input type="checkbox" id="complete">${toDo.value}<button name="delete" value="delete">X</button></li>`;
//         toDo.value = "";



//     }
        
// }

// const complete = document.querySelector("#complete");
// complete.addEventListener("click", completeTodo);

// function completeTodo(){
//     let del = document.querySelector(`#complete${}`)
//     if(value == activeTodoList.find(value)){

//     }
    
// }


const id = [];
const activeTodoList = [];
const completedTodoList = [];
let count;

function addTodo(){
    let toDo = document.querySelector("#toDoInput");
    console.log(`Inputted text: ${toDo.value}`);
    toDo.value = toDo.value.trimStart() 
    // const isDuplicate = activeTodoList.some((todos) => todos.value == toDo.value);
    if(toDo.value === ""){
        alert("You didn't enter a task!");
        toDo.value = "";
    }
    else if(activeTodoList.includes(toDo.value)){
        alert("You have inputted a duplicated task!");
        toDo.value = "";
    }
    else if(!isNaN(toDo.value)){
        alert("Do not input a number only!");
        toDo.value = "";
    }
    else{
        activeTodoList.push({
            value: toDo.Value,
            checked: false,
        });
        toDo.value = "";


        
        // count = id.length + 1;
        // id.push(count);
        // console.log(`Show ID array: ${id}`);
        // // activeTodoList.push(`${count}-${toDo.value}`);
        // activeTodoList.push(`${toDo.value}`);
        // // console.log(activeTodoList);
        // ul.innerHTML = ul.innerHTML + `<li id="${count}">${toDo.value}<button name="complete" value="complete" id="complete${count}">Complete</button><button name="delete" value="delete" id"delete${count}">Delete</button></li>`;
        // toDo.value = "";
    }
        console.log(`Active to do List Array: ${activeTodoList}`);    
}



// const doneTodo = document.querySelector(".complete");
// count = doneTodo.parentNode.id;
// if(doneTodo.value == true){
    
// }
// function MoveUL(){
//     listwo.append(this);
//     this.removeEventListener("click", MoveUL);
// }
// li.forEach( (el) => {
// el.addEventListener("click", MoveLi);
// });

activeTodoList.forEach((element) => {
    console.log(`Element in active array: ${element}`)

});

activeTodoList.forEach(checkActiveTodo);


function checkActiveTodo(item){
    console.log("Test")
}


