const taskInput = document.getElementById("taskInput");

const addButton = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

const taskCount = document.getElementById("taskCount");


let count = 0;


function addTask() {

    if (taskInput.value === "")
        return;


    const task = document.createElement("li");

    const taskText = document.createElement("span");

    taskText.textContent = taskInput.value;


    taskText.addEventListener("click", function () {

        if (taskText.style.textDecoration === "line-through") {
            taskText.style.textDecoration = "none";
        } else {
            taskText.style.textDecoration = "line-through";
        }

    });


    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";


    deleteButton.addEventListener("click", function () {

        task.remove();

        count--;

        taskCount.textContent = count;

    });


    task.appendChild(taskText);

    task.appendChild(deleteButton);

    taskList.appendChild(task);


    count++;

    taskCount.textContent = count;

    taskInput.value = "";
}


addButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter")
        addTask();

});
