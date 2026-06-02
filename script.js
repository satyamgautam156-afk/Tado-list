const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", function() {
    const task = input.value;
if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;

        document.getElementById("taskList").appendChild(li);

        input.value = "";
    }
});
