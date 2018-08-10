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

// a helper function to call when our request for dreams is done
const getGroupListener = function() {
  // parse our response to convert to JSON
  tasks = JSON.parse(this.responseText);

  // iterate through every dream and add it to our page
  tasks.forEach( function(row) {
    appendNewTask(row.text_name, row.finish_date, row.description, row.id);
  });
  
    console.log(tasks);
}

// request the dreams from our app's sqlite database
const groupRequest = new XMLHttpRequest();
groupRequest.onload = getGroupListener;
groupRequest.open('get', '/getTasks');
groupRequest.send();

// a helper function that creates a list item for a given dream
const appendNewTask = function(name, date, description, id) {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var dates = new Date(date).toLocaleDateString('en-US', {
    day : 'numeric',
    month : 'short'
  }).split(' ').join('-').replace('-', ' ');
  // var today = new Date(date);
  // console.log(new Date(date));
  // console.log(today);
  // console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
  
  const spanImg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34\"></path><polygon points=\"18 2 22 6 12 16 8 16 8 12 18 2\"></polygon></svg>"
  var entry = "<a onclick=\"toggleColor(" + id + ")\" id=\"houseOfCards" + id + "\" class=\"cards-select list-group-item list-group-item-action flex-column align-items-start list-group-item-success\" id=\"showForm\" style=\"margin-bottom: 8px;\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">" + name +"</h5><div style=\"float: right;\">" + dates + "<button type=\"button\" id=\"displayForms\" onclick=\"showEditForm(" + id + ")\"" + "\">" + spanImg + "</button></div></div><p class=\"mb-1\">" + description + "</p></a>";

  const newListItem = document.createElement('div');
  newListItem.innerHTML = entry;
  taskList.appendChild(newListItem);
  // $('a').on('click', function(){
//       var selectedId = this.id;
//     console.log('test'); 
//       $("#" + selectedId).toggleClass("list-group-item-success list-group-item-primary list-group-item-secondary list-group-item-danger list-group-item-info list-group-item-light list-group-item-dark list-group-item-warning");
//     });
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
  // stop our form submission from refreshing the page
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


