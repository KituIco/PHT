// Select DOM elements
const todoInput = document.querySelector(".todo-input"); // Input field for adding new tasks

const todoButton = document.querySelector(".todo-button"); // Button to add new tasks
const todoList = document.querySelector(".todo-list"); // UL element to display tasks
const filterOption = document.querySelector(".filter-todo"); // Dropdown for filtering tasks

// Event Listeners
todoButton.addEventListener("click", addTodo); // 3. Add new task when the button is clicked
document.addEventListener("DOMContentLoaded", getTodos); // 5. Load tasks from localStorage when the page is loaded
todoList.addEventListener("click", deleteTodo); // 8. Delete or complete a task when clicked
filterOption.addEventListener("click", filterTodo); //10. Filter tasks based on completion status
todoList.addEventListener("click", editTodo); //13. Add event listener to edit the task
// 1. Function to save tasks to localStorage
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


// 2.Function to add a new task
function addTodo(e) {
    // Prevent form submission
    e.preventDefault();

    // Check if input is empty or null
    if (!todoInput.value || todoInput.value.trim() === "") {
        alert("Please enter a task.");
        return; // Exit function if input is empty
    }
    // Create a new todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create a new list item for the task
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    // Save the task to localStorage
    saveLocalTodos(todoInput.value);

    // Add classes and append the new list item to the todo div
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    // Create a button to mark the task as completed
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Create a button to delete the task
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append the todo div to the todo list
    todoList.appendChild(todoDiv);
}





// 4. Function to load tasks from localStorage when the page is loaded
function getTodos() {// Function to filter tasks based on completion status
    function filterTodo(e) {
        const todos = todoList.childNodes;
        todos.forEach(function (todo) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
            }
        });
    }
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        // Create todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create list item for the task
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todoInput.value = "";

        // Create complete button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `<i class="fas fa-check"></i>`;
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // Create delete button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        // Append todo div to the todo list
        todoList.appendChild(todoDiv);
    });
}



// 6. Function to remove tasks from localStorage
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// 7. Function to delete or complete a task
function deleteTodo(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        // If the delete button is clicked, remove the task from the list
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", e => {
            todo.remove();
        });
    }

    if (item.classList[0] === "complete-btn") {
        // If the complete button is clicked, toggle the completed class
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// 9. Function to filter tasks based on completion status
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}

// 11. Add edit todo for  Editing Tasks
// Apply add event lister and direct function
function editTodo(e) {
    const item = e.target;
    if (item.classList.contains("todo-item")) {
        item.contentEditable = true;
        item.focus();
// handle blur event function event, which occurs when the element loses focus. It is when the user clicks outside the element. Inside the event listener function, we perform actions such as making the element non-editable again and updating the todo list
        item.addEventListener('blur', function() {
            item.contentEditable = false;
            updateLocalTodos(item.parentElement);
        });

//add an event listener to the editable element for the keydown event, which occurs when a key is pressed. Inside the event listener function, we check if the pressed key is Enter. If it is, we trigger the blur event, simulating the behavior of pressing Enter to confirm the edit.
        item.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                item.blur();
                event.preventDefault();
            }
        });
    }
}


// 12. Update localStorage after editing
function updateLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1, todo.children[0].innerText);
    localStorage.setItem("todos", JSON.stringify(todos));
}