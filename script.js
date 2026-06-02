const button = document.querySelector("button");
const input = document.querySelector("input"); 
const tasklist=document.querySelector("#taskList");
button.addEventListener("click", function() {
    const task = input.value;

    if(task !== "") {
        const li = document.createElement("li");
        li.textContent = task;

        document.body.appendChild(li);

        input.value = "";
    }
});
