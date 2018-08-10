$(document).ready(function(){
  var $newItemButton = $('#displayForm');
  var $newItemForm = $('#taskform');

  // Hides form until add card button is clicked
  $newItemButton.show();
  $newItemForm.hide();

  $('#displayForm').on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
  });

  // Get value from input field and create a new list child node
  $newItemForm.on('submit', function(e){
    $newItemForm.hide();
    $newItemButton.show();
});
  
});

$(document).ready(function(){
  var $newItemButton = $('#cancelForm');
  var $newItemButton2 = $('#displayForm');
  var $newItemForm = $('#taskform');
  
  $('#cancelForm').on('click', function(){
    $newItemForm.hide();
    $newItemButton2.show();
  }); 
});

$(document).ready(function(){
  var $newItemButton = $('#displayForms');
  var $newItemForm = $('#editGroupForm');

  // Hides form until add card button is clicked
  $newItemButton.show();
  $newItemForm.hide();

  $('#displayForms').on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
  });

  // Get value from input field and create a new list child node
  $newItemForm.on('submit', function(e){
    $newItemForm.hide();
    $newItemButton.show();
});
  
});

$(document).ready(function(){
  var $newItemButton = $('#cancelForms');
  var $newItemButton2 = $('#displayForms');
  var $newItemForm = $('#editGroupForm');
  
  $('#cancelForms').on('click', function(){
    $newItemForm.hide();
    $newItemButton2.show();
  }); 
});