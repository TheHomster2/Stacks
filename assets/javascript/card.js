function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function createCard(e) {
  var target, elParent, elGrandparent;
  target = getTarget(e);
  elParent = target.parentNode;
  elGrandParent = target.parentNode.parentNode;

  var newEl = document.createElement('li');
  var newText = document.createTextNode('node');
  newEl.appendChild(newText);

  elGrandParent.appendChild(newEl);

  // Prevent the link from refreshing page
  if(e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}


function readCard() {

}
function updateCard() {

}
function deleteCard(e) {
  // Remove item from the list
  var target, elParent, elGrandparent;
  target = getTarget(e);
  elParent = target.parentNode;
  elGrandParent = target.parentNode.parentNode;
  elGrandParent.removeChild(elParent);

  // Prevent the link from refreshing page
  if(e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

// Listens to boardCardList to know if card has been clicked
var boardCardList = document.getElementById('boardCardList');
if (boardCardList.addEventListener) {
  boardCardList.addEventListener('click', function(e) {
    deleteCard(e);  
  }, false);
} else {
  boardCardList.attachEvent('onclick', function(e){
    deleteCard(e);  
  });
}

