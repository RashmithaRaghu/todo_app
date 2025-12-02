const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll("#filters button");
const itemsLeft = document.getElementById("items-left");
const clearBtn = document.getElementById("clear-completed");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-checkbox";

        const span = document.createElement("span");
        span.textContent = input.value;

        checkbox.addEventListener("change", function () {
            span.classList.toggle("completed");
            li.classList.toggle("done");
            updateCount();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        list.appendChild(li);

        input.value = "";
        updateCount();   // <-- correct place
    }
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        filterTasks(filter);
    });
});

function filterTasks(filter) {
    const tasks = list.querySelectorAll("li");
    tasks.forEach(task => {
        const isCompleted = task.classList.contains("done");
        if (filter === "all") task.style.display = "flex";
        else if (filter === "active") task.style.display = isCompleted ? "none" : "flex";
        else if (filter === "completed") task.style.display = isCompleted ? "flex" : "none";
    });
}

function updateCount() {
    const tasks = list.querySelectorAll("li");
    let activeCount = 0;

    tasks.forEach(task => {
        if (!task.classList.contains("done")) activeCount++;
    });

    itemsLeft.textContent = `${activeCount} items left`;
}

clearBtn.addEventListener("click", () => {
    const tasks = list.querySelectorAll("li.done");
    tasks.forEach(task => task.remove());
    updateCount();
});
