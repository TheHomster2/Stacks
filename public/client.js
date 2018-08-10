// client-side js
// run by the browser each time your view template referencing it is loaded

// Static variable
var incr = (function () {
    var i = 1;
  
    return function () {
        return i++;
    } 
})();

console.log('hello world :o');
 
let tasks = [];

// define variables that reference elements on our page
const taskList = document.getElementById('tasks');
const taskForm = document.getElementById('taskform');
const taskInput = taskForm.elements['taskInput'];
const taskInputDate = taskForm.elements['taskInputDate'];
const taskInputDescription = taskForm.elements['taskInputDescription'];
const editGroupForm = document.getElementById('editGroupForm');

const taskEditInput = editGroupForm.elements['editName'];
const taskEditInputDate = editGroupForm.elements['editDate'];
const taskEditInputDescription = editGroupForm.elements['editDescription'];

// a helper function to call when our request for dreams is done
const getTaskListener = function() {
  // parse our response to convert to JSON
  tasks = JSON.parse(this.responseText);

  // iterate through every dream and add it to our page
  tasks.forEach( function(row) {
    appendNewTask(row.text_name, row.finish_date, row.description, row.id);
  });
  
    console.log(tasks);

}

// request the dreams from our app's sqlite database
const taskRequest = new XMLHttpRequest();
taskRequest.onload = getTaskListener;
taskRequest.open('get', '/getTasks');
taskRequest.send();

// a helper function that creates a list item for a given dream
const appendNewTask = function(name, date, description, id){  
  const spanImg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34\"></path><polygon points=\"18 2 22 6 12 16 8 16 8 12 18 2\"></polygon></svg>"
  var entry = "<a id=\"houseOfCards" + id + "\" class=\"cards-select list-group-item list-group-item-action flex-column align-items-start list-group-item-primary\" id=\"showForm\" style=\"margin-bottom: 8px;\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">" + name +"</h5><div style=\"float: right;\">" + date + "<button type=\"button\" onclick=\"editbutton(" + id + ")\" id=\"displayForms" + id + "\" \">" + spanImg + "</button></div></div><p class=\"mb-1\" onclick=\"toggleColor(" + id + ")\" >" + description + "</p></a>";

  const newListItem = document.createElement('div');
  newListItem.innerHTML = entry;
  taskList.appendChild(newListItem);
}

const createNewTask = function(name, date, description) {
  const createNewTask = new XMLHttpRequest();
  const params = "name=" + name + "&date=" + date + "&description=" + description;
  createNewTask.open('POST', '/newTasks');
  createNewTask.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  createNewTask.send(params);
}

// listen for the form to be submitted and add a new group when it is
taskForm.onsubmit = function(event) {
  event.preventDefault();

  // get group value and add it to the list
  tasks.push(taskInput.value, taskInputDate.value, taskInputDescription.value);
  appendNewTask(taskInput.value, taskInputDate.value, taskInputDescription.value);
  createNewTask(taskInput.value, taskInputDate.value, taskInputDescription.value);

  // reset form 
  taskInput.value = '';
  taskInput.focus();
  taskInputDate.value = '';
  taskInputDate.focus();
  taskInputDescription.value = '';
  taskInputDescription.focus();
};

var ids;
function editbutton(id) {
    var $newItemButton = $('.displayForms');
    var $newItemForm = $('#editGroupForm');
    $newItemButton = $('.displayForms' + id);
    console.log(id);
    ids = id;
    $newItemButton.hide();
    // console.log($n);
    $newItemForm.show();
}

const updateNewTask = function(name, date, description, id) {
    const updateNewTask = new XMLHttpRequest();
    const params = "name=" + name + "&date=" + date + "&description=" + description +"&id=" + id;
    updateNewTask.open('PUT', '/updateTasks');
    updateNewTask.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    updateNewTask.send(params);
  }

editGroupForm.onsubmit = function(event){
  event.preventDefault();
  updateNewTask(taskEditInput.value, taskEditInputDate.value, taskEditInputDescription.value, ids);
  taskList.innerHTML = "";
  tasks = [];
  taskRequest.ready = getTaskListener;
  taskRequest.open('get', '/getTasks');
  taskRequest.send();
  
  taskInput.value = '';
  taskInput.focus();
  taskInputDate.value = '';
  taskInputDate.focus();
  taskInputDescription.value = '';
  taskInputDescription.focus();
}


