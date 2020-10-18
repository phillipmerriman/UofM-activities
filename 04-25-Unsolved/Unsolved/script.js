var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
    todoList.textContent = "";
    let numTodos = todos.length;
    todoCountSpan.textContent = numTodos;

    for (let i = 0; i < numTodos; i++) {
        let liEl = document.createElement("li");
        liEl.textContent = todos[i];
        todoList.appendChild(liEl);   
    }
}
renderTodos();