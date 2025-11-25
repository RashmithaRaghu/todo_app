const input = document.getElementById("todo-input");
const list = document.getElementyId("todo-list");

input.addEventListener("keypress",function(e){
    if(e.key === "Enter" && input.value.trim()!==""){
        const li = document.createElement("li");
        li.textContent = input.value;

        li.addEventListener("click",function(){
            li.classList.toggle("completed");
        });
        list.appendChild(li);
        input.value = "";
    }
})