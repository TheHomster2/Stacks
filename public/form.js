$(document).ready(function(){
  var $newItemButton = $('#displayForm');
  var $newItemForm = $('#groupform');

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
  var $newItemForm = $('#groupform');
  
  $('#cancelForm').on('click', function(){
    $newItemForm.hide();
    $newItemButton2.show();
  }); 
});