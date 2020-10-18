let todoInput = document.querySelector("#todo-text");
let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let todoCountSpan = document.querySelector("#todo-count");

let todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.textContent = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTodo = todoInput.value;
  todos.push(newTodo);
  todoInput.value = "";
  renderTodos();
})