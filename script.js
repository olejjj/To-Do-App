const input = document.getElementById("input");
const button = document.getElementById("button");
const todos = document.getElementById("todos");

// block enter in input
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
    }
});

// toggle completed - uncompleted todos
todos.addEventListener("click", function(event) {

    event.target.classList.toggle("completed");
})

button.addEventListener("click", function (event) { addToDo(); });

function addToDo() {

    let todoText = input.value;

    if (todoText !== "") {
        let todoEl = document.createElement("li"); // utworzony w pamięci
        todoEl.innerHTML = todoText;
        todos.appendChild(todoEl);
        input.value = "";
    }
}
