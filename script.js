const input = document.getElementById("input");
const button = document.getElementById("input-button");
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
});

button.addEventListener("click", function (event) { addToDo(); });



// adding new to-do and delete button
function addToDo() {

    let todoText = input.value;

    if (todoText !== "") {
        let todoEl = document.createElement("li"); // utworzony w pamięci
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = "<img src=\"trash.png\" alt=\"delete\" class=\"trash\">";
        todoEl.innerHTML = todoText;
        todos.appendChild(todoEl);
        todos.appendChild(deleteButton);
        input.value = "";
    }
}
