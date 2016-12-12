//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button"); //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //complete-tasks

//New Task List item
var createNewTaskElement = function(taskString) {
    //Create List item
    var listItem = document.createElement("li");

    //input (checkbox)
    var checkbox = document.createElement("input"); //checkbox
    //label
    var label = document.createElement("label");
    //input (text)
    var editInput = document.createElement("input");
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");

     //Each elements, needs modified and appended

    //Each element needs appending
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
};

//Add a new tasks
var addTask = function() {
    console.log("Add task...");
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement("Some New Task");
};

//Edit an existing tasks
var editTask = function() {
    console.log("Edit task...");
    //When the edit button is pressed
    //If the class of the parent is .editMode
        //Switch from .editMode
        //label text become the input's value
    //else
        //Switch to .editMode
        //input value becom the label's text
    
    //Toggle .editMode on the parent
};

//Delete an existing tasks
var deleteTask = function() {
    console.log("delete Task...");
    //When the Delete button is pressed
        //Remove the parent list item from the ul
};

//Mark a task as complete
var taskCompleted = function() {
    console.log("task Complete...");
    //When the checkbox is complete
        //Append the task list item to the #completed-tasks
};

//Mark a task as incomplete
var taskIncomplete = function() {
    console.log("task Incomplete...");
    //When the checkbox is complete
        //Append the task list item to the #incomplete-tasks
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    //select it's children
    var checkbox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
        //bind editTask to edit button
        editButton.onclick = editTask;
        //bind deleteTask to delete button
        deleteButton.onclick = deleteTask;
        //bind taskComplete to checkbox
        checkbox.onchange = checkBoxEventHandler;
};

//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items
for(var i = 0; 1 < incompleteTasksHolder.children.length; i++) {
    //bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[1], taskCompleted);
}

//cycle over completeTasksHolder ul list items
for(var i = 0; 1 < incompleteTasksHolder.children.length; i++) {
    //for each list item
        //bind events to list item's children (taskIncompleted)
    bindTaskEvents(completedTasksHolder.children[1], taskIncomplete);
}