// client-side js
// run by the browser each time your view template referencing it is loaded

console.log('hello world :o');

let groups = [];

// request the dreams from our app's sqlite database
// const dataRequest = new XMLHttpRequest();
// dataRequest.onload = getDataListener;
// dataRequest.open('get', '/getlocationdata');
// dataRequest.send();

// define variables that reference elements on our page
const groupList = document.getElementById('groups');
const groupForm = document.getElementById('groupform');
const groupInput = groupForm.elements['groupInput'];
const groupInputDate = groupForm.elements['groupInputDate'];
const groupInputDescription = groupForm.elements['groupInputDescription'];

// a helper function to call when our request for dreams is done
const getGroupListener = function() {
  // parse our response to convert to JSON
  groups = JSON.parse(this.responseText);

  // iterate through every dream and add it to our page
  groups.forEach( function(row) {
    appendNewGroup(row.text_name, row.finish_date, row.description);
  });
  
    console.log(groups);
}

// request the dreams from our app's sqlite database
const groupRequest = new XMLHttpRequest();
groupRequest.onload = getGroupListener;
groupRequest.open('get', '/getTasks');
groupRequest.send();

// a helper function that creates a list item for a given dream
const appendNewGroup = function(name, date, description) {
  
  const spanImg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34\"></path><polygon points=\"18 2 22 6 12 16 8 16 8 12 18 2\"></polygon></svg>"
  var entry = "<a class=\"cards-select list-group-item list-group-item-action flex-column align-items-start list-group-item-success\" id=\"sdhowForm\" style=\"margin-bottom: 8px;\"><div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\">" + name +"</h5><div style=\"float: right;\"> <small>" + date + "</small><button type=\"button\">" + spanImg + "</button></div></div><p class=\"mb-1\">" + description + "</p></a>";

  const newListItem = document.createElement('div');
  newListItem.innerHTML = entry;
  groupList.appendChild(newListItem);
}

const createNewGroup = function(name, date, description) {
  const createNewGroup = new XMLHttpRequest();
  const params = "name=" + name + "&date=" + date + "&description=" + description;
  createNewGroup.open('POST', '/newGroups');
  createNewGroup.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  createNewGroup.send(params);
}

// listen for the form to be submitted and add a new group when it is
groupForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get group value and add it to the list
  groups.push(groupInput.value, groupInputDate.value, groupInputDescription.value);
  appendNewGroup(groupInput.value, groupInputDate.value, groupInputDescription.value);
  createNewGroup(groupInput.value, groupInputDate.value, groupInputDescription.value);

  // reset form 
  groupInput.value = '';
  groupInput.focus();
  groupInputDate.value = '';
  groupInputDate.focus();
  groupInputDescription.value = '';
  groupInputDescription.focus();
};


