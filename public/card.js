function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

// function createCard(e) {
//   var target;
//   var elParent; 
//   var elGrandParent;
//   target = getTarget(e);
//   elParent = target.parentNode;
//   elGrandParent = target.parentNode.parentNode;

//   var newEl = document.createElement('li');
//   var newText = document.createTextNode('node');
//   newEl.appendChild(newText);

//   elGrandParent.appendChild(newEl);

//   // Prevent the link from refreshing page
//   if(e.preventDefault) {
//     e.preventDefault();
//   } else {
//     e.returnValue = false;
//   }
// }

function updateCard(e) {
  // Update item from the list
  var target;
  var elParent; 
  var elGrandParent;
  target = getTarget(e);
  elParent = target.parentNode;
  elGrandParent = target.parentNode.parentNode;
}
function deleteCard(e) {
  // Remove item from the list
  var target
  var elParent;
  var elGrandParent;
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
// var boardCardList = document.getElementById('boardCardList');
// if (boardCardList.addEventListener) {
//   boardCardList.addEventListener('click', function(e) {
//     deleteCard(e);  
//   }, false);
// } else {
//   boardCardList.attachEvent('onclick', function(e){
//     deleteCard(e);  
//   });
// }

// $(document).ready(function(){
//   $('a').on('click', function(){
//       var selectedId = this.id;
//     console.log('test'); 
//       $("#" + selectedId).toggleClass("list-group-item-success list-group-item-primary list-group-item-secondary list-group-item-danger list-group-item-info list-group-item-light list-group-item-dark list-group-item-warning");
//     });
// });

function toggleColor(id){
  // $('a').each(function(){
    // var classes = ['list-group-item-success', 'list-group-item-primary', 'list-group-item-secondary', 'list-group-item-danger', 'list-group-item-info', 'list-group-item-light', 'list-group-item-dark', 'list-group-item-warning'];
  //   this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  // });
  // var selectedId = this.id;
  
  // if ($("#houseOfCards" + id).hasClass('list-group-item-success')){ // <- not working we also have to add tags into the databse
  //     $("#houseOfCards" + id).toggleClass("list-group-item-primary");
  // }
  // else{ 
  //   $("#houseOfCards" + id).toggleClass("list-group-item-success");
  // }

  $("#houseOfCards" + id).toggleClass("list-group-item-success");
}


                
// function toggleColor(){
//       var selectedId = this.id;
//       console.log('test', this); 
//       $("#" + selectedId).toggleClass("list-group-item-success list-group-item-primary list-group-item-secondary list-group-item-danger list-group-item-info list-group-item-light list-group-item-dark list-group-item-warning");
//     }

// $(document).ready(function(){
//   var cards = document.getElementsByClassName('cards-select').length;
  // for (var i = 0; i < cards; i++){
    // if (!$(this).hasClass('list-group-item-success')) {
    //   $("#houseOfCards").toggleClass("list-group-item-primary list-group-item-success list-group-item-danger list-group-item-info list-group-item-light list-group-item-dark list-group-item-warning")
    // }
    // else{
    //   $("#houseOfCards").toggleClass("list-group-item-primary list-group-item-secondary list-group-item-success list-group-item-danger list-group-item-info list-group-item-light list-group-item-dark list-group-item-warning")
    // }
    // $('#houseOfCards').on('click', function () {
    //   this.toggleClass("list-group-item-primary");
    // });
  // }
// });

//     ($('#houseOfCards').on('click', function(){
    // if ($class*="list-group-item-success"){
      // $("#houseOfCards").toggleClass("list-group-item-primary list-group-item-secondary list-group-item-success list-group-item-danger list-group-item-info list-group-item-light list-group-item-dark list-group-item-warning")
    
//       }
//     );

//   });
     
     
//  $("a").click(function(e) {
//     e.preventDefault();
//     if (!$(this).hasClass('className')) {
//         alert("You did not click className!");
//     }
// });

// $('span').on('click', function () {
//     alert(this.id);
// });
