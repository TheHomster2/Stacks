// document.getElementsByClassName("Board").getElementsByClassName("cards-select")

// board class
// cards-select id
// addCardButton button
// new-cards div
// var addCardButton =
var buttonHTML = "<div class=\"addCardButton\"><button class=\"btn btn-sm btn-outline-secondary\" style=\"width: 100%;\" onClick=\"addCard()\"><span data-feather=\"plus\"></span> Add another card</button></div>";

function addCard() {
  document.querySelector(".board").querySelector(".addCardButton").innerHTML = "<h1>Hello</h1>" + buttonHTML 
}