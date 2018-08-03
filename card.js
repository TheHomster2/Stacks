var buttonHTML = "<div class=\"addCardButton\"><button class=\"btn btn-sm btn-outline-secondary\" style=\"width: 100%;\" onClick=\"addCard()\"><span data-feather=\"plus\"></span> Add another card</button></div>";
var cardHTML = "<div class=\"card bg-light mb-3\" id=\"cards-select\" style=\"max-width: 18rem;\"><div class=\"card-header\">Header</div><div class=\"card-body\"><h5 class=\"card-title\">Basic card </h5><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div></div>";

function createCard() {

}
function readCard() {

}
function updateCard() {

}
function deleteCard() {

}

function addCard() {
  document.querySelector(".board").querySelector(".addCardButton").innerHTML = cardHTML; 
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



