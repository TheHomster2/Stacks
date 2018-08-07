$(document).ready(function(){
  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');

  // Hides form until add card button is clicked
  $newItemButton.show();
  $newItemForm.hide();

  $('#showForm').on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
  });

  // Get value from input field and create a new list child node
  $newItemForm.on('submit', function(e){
    var newText = $textInput.val();
    console.log(newText);
    $('li:last').after('<li>' + newText + '</li>');
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');

    // Prevent the link from refreshing page
    if(e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    });
});
