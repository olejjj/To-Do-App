const input = document.getElementById("input");
const button = document.getElementById("input-button");
const todos = document.getElementById("todos");

// block enter in input
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
    }
});


button.addEventListener("click", function (event) { addToDo(); });

// adding new to-do and delete button
function addToDo() {

    let todoText = input.value;

    if (todoText !== "") {
        let todoEl = document.createElement("li"); // utworzony w pamięci
        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = "<img src=\"trash.png\" alt=\"delete\" class=\"trash\">";
        todoEl.innerHTML = todoText;
        todos.appendChild(todoEl);
        todos.appendChild(deleteButton);
        input.value = "";
    }
}

// toggle completed - uncompleted todos
todos.addEventListener("click", function(event) {
    event.target.classList.toggle("completed");

    getTrash();

});

// getting delete button if completed
function getTrash() {

    let li = document.getElementsByTagName("li");
    let deleteButton = document.querySelectorAll(".delete-button");

    for (let i = 0; i < li.length; i++) {
        if (li[i].classList[0] === "completed") {
            deleteButton[i].style.visibility = "visible";
        } else {
            deleteButton[i].style.visibility = "hidden";
        }
    }
}

todos.addEventListener("click", function(event) {
    // bo img jest dzieckiem deleteButtona, klikajac w img kosza klikasz target to deleteButton
    if(event.target.closest(".delete-button")) {
        const button = event.target.closest(".delete-button");
        const li = button.previousElementSibling; // element poprzedni (wyżej)
        li.remove();
        button.remove();
    }
})