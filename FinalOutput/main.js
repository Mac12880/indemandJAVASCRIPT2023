const submit = document.querySelector("#submit");
// const ul = document.querySelector("#list");
const todoListElem = document.querySelector("#list");



submit.addEventListener("click", function (event) {
    event.preventDefault();
    addTodo();
    showTodo();
});

// const id = [];
const activeTodoList = [];
// const completedTodoList = [];
let count;

function addTodo(){
    let toDo = document.querySelector("#toDoInput");
    console.log(`Inputted text: ${toDo.value}`);

    if(toDo.value === ""){
        alert("You didn't enter a task!");
        toDo.value = "";
    }
    //to check if toDo.value is a duplicate on an array of objects
    else if(activeTodoList.some(({value}) => value === `${toDo.value}`)){
        alert("You have inputted a duplicated task!");
        toDo.value = "";
    }
    else if(!isNaN(toDo.value)){
        alert("Do not input a number only!");
        toDo.value = "";
    }
    else{
        activeTodoList.push({
            value: toDo.value,
            checked: false,
        });
        console.log(toDo.value);
        toDo.value = "";
    }
        console.log(`Active to do List Array: ${activeTodoList[0]} ${activeTodoList[1]}`);    
}

function showTodo(){
    todoListElem.innerHTML = "";//Reset element 
    activeTodoList.forEach((todo, index) => {
        

        //show on html
        todoListElem.innerHTML += `
        <div class="toDo" id="${index}">
            <table>
                <tr>
                    <td class="left">
                        <a><i class="bi ${todo.checked ? 'bi-check-circle' : 'bi-circle'}"
                        data-action="check">
                        
                        </i></a>
                        <p style="display: inline-block;" data-action="check">${todo.value}</p>
                    </td>
                    <td class="right">
                        <a><i class="bi bi-trash3-fill" data-action="delete"></i></a>
                    </td>
                </tr>
            </table>
        </div>
        `;
        console.log(activeTodoList[0]);
    });
}

//event listener for all todo's
todoListElem.addEventListener('click', (event) =>{
    const target = event.target;
    let parentElem = target;
    //get the GreatGreatGreatGrandParent
    for (let i = 0; i < 6; i++) {
    parentElem = parentElem.parentNode;
    }

    if(parentElem.className !== 'toDo'){
        return
    }
    // console.log(parentElem)//show the GreatGreatGreatGrandParent node
    const todo = parentElem;
    const todoId = Number(todo.id);
    console.log(todoId);//show id
    
    //target action
    const action = target.dataset.action
    // console.log(todoId, action);//check the action

    action === "check" && checkTodo(todoId);
    // action === "delete" && deleteTodo(todoId);

    
});

//Check a todo

function checkTodo(){
    activeTodoList.map
}

// activeTodoList.forEach((element) => {
//     console.log(`Element in active array: ${element}`)

// });

// activeTodoList.forEach(checkActiveTodo);


// function checkActiveTodo(item){
//     console.log("Test")
// }


