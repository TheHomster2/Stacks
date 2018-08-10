
// document.querySelector(".add_button1").onclick = function(){
// 	popUp();
// }

// function popUp(){
// 	document.querySelector(".add_button1").innerHTML = '<div class="pop-over is-shown" style="left: 5px; top: 211px; position: fixed;"><div class="no-back"><div class="pop-over-header js-pop-over-header"><span class="pop-over-header-title">Create Project</span><a href="#" class="pop-over-header-close-btn icon-sm icon-close">::before</a></div><div><div class="pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent" style="max-height: 532px;"><div><div><form><p class="error" style="display:none"></p><label for="org-display-name">Name</label><input id="org-display-name" class="js-autofocus js-display-name" type="text" name="displayName" value="" dir="auto" maxlength="100"><label for="org-desc">Description <span class="quiet u-font-weight-normal">(optional)</span></label><textarea id="org-desc" name="desc" dir="auto"></textarea><input class="primary wide js-save" type="submit" value="Create" disabled=""></form><hr></div></div></div></div></div></div>';
// }

var modal = document.querySelector(".pop-overis-shown");
var button = document.querySelector(".add_button1");
var span = document.getElementsByClassName("pop-up-close")[0];

button.onclick = function(){
	modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// document.getElementById('submit').onsubmit = function(event) {
//   // stop our form submission from refreshing the page
//   event.preventDefault();

//   // get dream value and add it to the list
//   dreams.push(dreamInput.value);
//   appendNewDream(dreamInput.value);

//   // reset form 
//   dreamInput.value = '';
//   dreamInput.focus();
// };
const createNewGroupss = function(owner, name_group) {
  console.log("Create new group");
  const createNewGroup = new XMLHttpRequest();
  const params = "owner=" + owner + "&name_group=" + name_group;
  createNewGroup.open('POST', '/newGroups');
  createNewGroup.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  createNewGroup.send(params);
}

document.getElementById('submit').onclick = function(event){
  event.preventDefault();
  if (document.getElementById("org-display-name").value === ''){
    action();
  }
  var project_name = document.getElementById("org-display-name").value;

  // db.run('INSERT
  var entry = '<li class="nav-item"><a class="nav-link" href="#">' + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>' + '   ' + project_name + "</a></li>";
    
  var newEl = document.createElement('li');
  newEl.innerHTML = entry;
  
//   // var newText = document.createTextNode(project_name);
//   // newEl.appendChild(newText);
  createNewGroupss("Joe", project_name);
  document.getElementById("groups").appendChild(newEl);
  document.getElementById("org-display-name").value = '';
  project_name.focus();
}

$('.pop-up-input').on("keyup", action);
function action() {
   if($(this).val() != '') {
      $('.submit-button').prop("disabled", false);
   }else {
      $('.submit-button').prop("disabled", true);
   }
}
