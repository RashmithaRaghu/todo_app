const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll("#filters button");

input.addEventListener("keydown",function(e){
    if(e.key === "Enter" && input.value.trim()!== ""){
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-checkbox";

        const span = document.createElement("span");
        span.textContent = input.value;

        checkbox.addEventListener("change",function(){
            span.classList.toggle("completed");
            li.classList.toggle("done");
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        list.appendChild(li);
        input.value = "";
    }
});

filterButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const filter = btn.dataset.filter;
        filterTasks(filter);
    });
});
function filterTasks(filter){
    const tasks = list.querySelectorAll("li");
    tasks.forEach(task=>{
        const isCompleted = task.classList.contains("done");
        if(filter === "all"){
            task.style.display = "flex";
        }
        else if(filter === "active" && isCompleted){
            task.style.display = "none";
        }
        else if(filter === "active" && !isCompleted){
            task.style.display = "flex";
        }
        else if(filter === "completed" && !isCompleted){
            task.style.display = "none";
        }
        else if(filter === "completed" && isCompleted){
            task.style.display = "flex";
        }
    });
}