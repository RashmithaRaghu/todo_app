const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

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
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        list.appendChild(li);
        input.value = "";
    }
});