const todoContainer = document.getElementById("todo-container");
const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");

function submit() {
    if (inputField.value != "") {
        let todo = document.createElement("p");
        todo.innerText = inputField.value;
        todoContainer.appendChild(todo);
        inputField.value = "";

        todo.addEventListener("click", function() {
            if (todo.style.textDecoration == "line-through") {
                todo.style.textDecoration = "none";
                todo.style.background = "white";
                todo.style.fontWeight = "normal";
            } else {
                todo.style.textDecoration = "line-through";
                todo.style.background = "rgb(255, 249, 249)";
                todo.style.fontWeight = "bold";
            }
        });
        todo.addEventListener("dblclick", function() {
            todoContainer.removeChild(todo);
        });
    }
}

addButton.addEventListener("click", submit);
document.addEventListener("keydown", function(e) {if (e.code === "Enter") {submit();}})