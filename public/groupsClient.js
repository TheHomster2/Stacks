// group-client-side js
// run by the browser each time your view template referencing it is loaded
console.log('hello world :o');
 
let groups = [];

// define variables that reference elements on our page
const groupList = document.getElementById('groups');
const groupForm = document.getElementById('groupform');
const groupInput = document.getElementById('org-display-name');
const groupInputDescription = groupForm.elements['org-desc'];

// a helper function to call when our request for dreams is done
const getGroupListener = function() {
  // parse our response to convert to JSON
  groups = JSON.parse(this.responseText);

  // iterate through every dream and add it to our page
  groups.forEach( function(row) {
    appendNewGroup(row.owner, row.name_group, row.id);
  });
  
  console.log(groups);
}

// request the dreams from our app's sqlite database
const groupRequest = new XMLHttpRequest();
groupRequest.onload = getGroupListener;
groupRequest.open('get', '/getGroups');
groupRequest.send();

// a helper function that creates a list item for a given dream
const appendNewGroup = function(owner, name_group, id) {  
    console.log("append new group");
  const spanImg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>';
  var entry = '<li class="nav-item" id="' + id +'"><a class="nav-link" href="#">' + spanImg + '   ' + name_group + "</a></li>";
    
  var newEl = document.createElement('li');
  newEl.innerHTML = entry;
  // document.getElementById("groupHeaderList");
  groupList.appendChild(newEl);
  }

const createNewGroup = function(owner, name_group) {
  console.log("Create new group");
  const createNewGroup = new XMLHttpRequest();
  const params = "owner=" + owner + "&name_group=" + name_group;
  createNewGroup.open('POST', '/newGroups');
  createNewGroup.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  createNewGroup.send(params);
}

// listen for the form to be submitted and add a new group when it is
groupForm.onsubmit = function(event) {
  event.preventDefault();

  // get group value and add it to the list
  groups.push(groupInput.value, groupInputDescription.value);
  appendNewGroup(groupInput.value, groupInputDescription.value);
  createNewGroup(groupInput.value, groupInputDescription.value);

  // reset form 
  groupInput.value = '';
  groupInput.focus();
  groupInputDescription.value = '';
  groupInputDescription.focus();
};


