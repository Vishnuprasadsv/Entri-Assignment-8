// Adding all the buttons
let addBtn = document.getElementById("addbtn");
let addTask = document.getElementById("addtask");
let tasks = document.getElementById("tasks");
let checkbox = document.querySelector("checkbox");
let listDelete = document.querySelector("list_delete");

// adding click event to the button 
addBtn.addEventListener("click", (e) => {
    // removing the white space from start and end
  let taskText = addTask.value.trim();

//   condition to avoid blank list
  if (taskText.length === 0) {
    return;
  }
//   adding the list elemt 
  let li = document.createElement("li");
  li.className =
    " d-flex align-items-center fw-medium p-1 mb-3 rounded-3 maintasks";
  li.innerHTML = `<input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;" class="me-2 ms-2 " id = "checkBox">
                   <span style="width: 20rem; " id = "liText">${taskText} </span>
                <button style="background:transparent;  margin-left: 10px;" class="border-0 pt-1" id = "editbtn"><span id="editIcon" class="material-symbols-outlined" style="color: rgb(71, 71, 71);">edit</span></button>
                <button style="background:transparent; margin-left: 50px;" class="border-0 pt-1" id="list_delete"><span class="material-symbols-outlined" style="color: red;">delete</span></button>`;
  tasks.appendChild(li);
  addTask.value = "";

//   deleting the list element
  li.querySelector("#list_delete").addEventListener("click", () => {
    tasks.removeChild(li);
  });
// list text edit
  li.querySelector("#editbtn").addEventListener("click", () => {
    // deleting the existing list and adding the existing list text to the task input for editing
    addTask.value = li.querySelector("#liText").innerText;
    li.remove();
  });

//   adding the checkbox and adding line-through style when checkbox is changed
  li.querySelector("#checkBox").addEventListener("change", () => {
    li.querySelector("#liText").style.textDecoration = "line-through";
    // adding checked checkbox to the variable 
    let isCheck = li.querySelector("#checkBox").checked;
    // adding style to the edit button
    li.querySelector("#editIcon").style.color = "red";
    // disabling the edit and delete button when checkbox is checked
    li.querySelector("#editbtn").disabled = true;
    li.querySelector("#list_delete").disabled = true;
    // adding style to the list
    li.style.border = "2px solid red";

    // if checkbox is not checked back to normal
    if (!isCheck) {
      li.querySelector("#liText").style.textDecoration = "none";
      li.querySelector("#editIcon").style.color = "rgb(71, 71, 71)";
      li.style.border = "2px solid rgb(206, 206, 206)";
      li.querySelector("#editbtn").disabled = false;
      li.querySelector("#list_delete").disabled = false;
    }
  });
});
