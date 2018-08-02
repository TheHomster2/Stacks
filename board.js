// document.getElementsByClassName("Board").getElementsByClassName("cards-select")

// board class
// cards-select id
// addCardButton button
// new-cards div
// var addCardButton =
var buttonHTML = "<div class=\"addCardButton\"><button class=\"btn btn-sm btn-outline-secondary\" style=\"width: 100%;\" onClick=\"addCard()\"><span data-feather=\"plus\"></span> Add another card</button></div>";
var cardHTML = "<div class=\"card bg-light mb-3\" id=\"cards-select\" style=\"max-width: 18rem;\"><div class=\"card-header\">Header</div><div class=\"card-body\"><h5 class=\"card-title\">Basic card </h5><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div></div>";

function addCard() {
  document.querySelector(".board").querySelector(".addCardButton").innerHTML = cardHTML + buttonHTML; 
}