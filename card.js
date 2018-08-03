var buttonHTML = "<div class=\"addCardButton\"><button class=\"btn btn-sm btn-outline-secondary\" style=\"width: 100%;\" onClick=\"addCard()\"><span data-feather=\"plus\"></span> Add another card</button></div>";
var cardHTML = "<div class=\"card bg-light mb-3 cards-select\" style=\"max-width: 18rem;\"><div class=\"card-header d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2\">Finish popup<div><span data-feather=\"alert-circle\"></span>Aug 10</div></div><div class=\"card-body\"><h5 class=\"card-title\">User</h5><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div></div>";

function createCard() {

}
function readCard() {

}
function updateCard() {

}
function deleteCard() {

}

function addCard() {
  // document.querySelector(".board").querySelector(".addCardButton").innerHTML = cardHTML; 
  var boards = document.getElementsByClassName('board');
  var cards = document.getElementsByClassName('cards-select');

  for (var i = 0; i < cards.length; i++){
    console.log(cards[i].textContent);
  }
  console.log(cards.length)
  console.log(boards.length)

  var newEl = document.createElement('li');
  var newText = document.createTextNode('node');
  
  newEl.appendChild(newText);
  var position = document.querySelectorAll('div.cards-select');
  var nextItem = document.querySelectorAll('div.cards-select')[0].parentNode;

  nextItem.appendChild(newEl);
  // position[0].appendChild(newEl);
}
{/* <script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

  });
</script> */}
// $("#target2").removeClass("btn-default");
// $("#target1").css("color", "blue");
// $("button").prop("disabled", true);

// $("h3").html("<em>jQuery Playground</em>"); //or text() to change the text
// $("#target4").remove();



