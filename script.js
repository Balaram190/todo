window.addEventListener("load", () => {

    let input = document.getElementById("input");
    let addTask = document.getElementById("add");
    let addedTask = document.getElementById("added");

    addTask.addEventListener("click", (e) => {
        e.preventDefault();

        if (input.value != "") {

            let task = document.createElement("li");
            task.setAttribute("id", "paraa")
            addedTask.appendChild(task);

            let para = document.createElement("p");
            task.appendChild(para);
            para.innerHTML = input.value;

            let buttonDiv = document.createElement("div");
            buttonDiv.setAttribute("id", "edit_delete");
            task.appendChild(buttonDiv);

            let edit = document.createElement("button");
            edit.innerText = "Edit";
            edit.setAttribute("id", "edit");
            buttonDiv.appendChild(edit);

            let remove = document.createElement("button");
            remove.innerText = "Delete";
            remove.setAttribute("id", "delete");
            buttonDiv.appendChild(remove);

            input.value = "";

            remove.addEventListener("click", () => {


                addedTask.removeChild(task);

            });


            edit.addEventListener("click", () => {
                let edit = prompt("Edited task here");

                console.log(edit);
                if (edit == null) {
                    return;
                }
                else {
                    para.innerText = edit;
                }


            });
        } else {
            alert("please enter your task");
        }
    });

})
function removeAll() {
    document.getElementById("task-list").innerHTML = "";
}