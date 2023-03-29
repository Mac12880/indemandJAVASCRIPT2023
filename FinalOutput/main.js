const submit = document.querySelector("#submit");
const todoListElem = document.querySelector("#list");
const clickToDo = document.querySelector("#clickMe");
const activateToDo = document.querySelector("#activateToDo");
let getname;

// Get
window.addEventListener('message', event => {
    // Retrieve the variable from the parent window
    const yourName = event.data;
    console.log(yourName); // Output: 'Hello, world!'
  });






// clickToDo.addEventListener("click", clToDo);
// $(document).on('click', '.btn', function() {

//     var name = $(this).data('username');        
//     if (name) {
//         window.location = '/player_detail?username=' + name;
//     }
// });​





submit.addEventListener("click", function (event) {
    event.preventDefault();
    addTodo();
    showTodo();
});

let activeTodoList = [];

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
                        <a><i class="bi check ${todo.checked ? 'bi-check-circle' : 'bi-circle'}"
                        data-action="check">
                        
                        </i></a>
                        <p style="display: inline-block;" data-action="check">${todo.checked ? '<s>' : ''}${todo.value}${todo.checked ? '</s>' : ''}</p>
                    </td>
                    <td class="right">
                        <a><i class="bi  delete bi-trash3-fill" data-action="delete"></i></a>
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
    // console.log(todoId);//show id
    
    //target action
    const action = target.dataset.action
    // console.log(todoId, action);//check the action

    action === "check" && checkTodo(todoId);
    action === "delete" && deleteTodo(todoId);

    
});

//Check a todo
function checkTodo(todoId){
    activeTodoList = activeTodoList.map((todo, index) => {
        if(index === todoId){
            return {
                value : todo.value,
                checked : !todo.checked
            }
        }
        else{
            return {
                value : todo.value,
                checked : todo.checked
            }
        }
    });
    //show again because we changed the array
    showTodo();
}

//Delete a todo
function deleteTodo(todoId){
    activeTodoList = activeTodoList.filter((todo, index) => index !== todoId);

    //show again because we changed the array
    showTodo();
}


