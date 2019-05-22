function createTask()
{
    // getting the input value
    const userInput = document.querySelector("input[type=text]");
    const taskText = userInput.value.trim(); 

    // Creating the elements dinamically 
     // creating the div element, adding the styles and appending
     if(taskText)
     {
     const parentContainer = document.querySelector(".task");
     const divContainer = document.createElement("div");
     divContainer.classList.add("task-item");
     parentContainer.appendChild(divContainer);

     // Creating the checkbox
     const checkboxInput = document.createElement("input");
     checkboxInput.type = "checkbox";

    // Creating the label 
    const labelInput = document.createElement("label");
    labelInput.classList.add("label-task");
    labelInput.textContent = taskText;

    // Creating the delete button
    const deleteButton = document.createElement("input");
    deleteButton.type = "image";
    deleteButton.src = "cancel.svg";
    deleteButton.classList.add("icon");

    // appending all elements to the div container
    divContainer.appendChild(checkboxInput);
    divContainer.appendChild(labelInput);
    divContainer.appendChild(deleteButton);

    hideParagraph();
    positioningDeleteButton();

    // clear the text input
    userInput.value = "";
    userInput.focus();
}

}
function hideParagraph()
{
    emptyTextStatement.classList.add("hide");
}

function positioningDeleteButton()
{
const taskItemContainer = document.querySelector(".task-item").getBoundingClientRect().width;
const widthCheckBox = document.querySelector("input[type=checkbox]").getBoundingClientRect().width;
const space = 20;
const icons = document.querySelectorAll(".icon");

icons.forEach(icon=>
{
    icon.style.marginLeft = taskItemContainer - widthCheckBox - space + "px";
})

}

function deleteTask(e)
{
    
    if(e.target.closest("input[type=image]"))
    {
     
     const divContainer = e.target.parentElement;
      const parentContainer = divContainer.parentElement;
      parentContainer.removeChild(divContainer);
      
      const children = Array.from(parentContainer.children);
      
      if(children.length < 2)
      {
         emptyTextStatement.classList.remove("hide");
      }
    }
 
}
