const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

input.addEventListener("keydown",function(e){
    if(e.key === "Enter" && input.value.trim()!==""){
        const li = document.createElement("li");
        

        li.addEventListener("click",function(){
            li.classList.toggle("completed");
        });
        list.appendChild(li);
        input.value = "";
    }
})