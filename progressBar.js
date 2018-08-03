// get elements by classname of the board
//find total bg-success cards over cards

var cards = document.getElementsByClassName('cards-select').length;
var successCards = $('.cards-select.bg-success').length;

// for(var i = 0; i < cards; i++){
// 	if ($class*="bg-success"){
// 		successCards += 1;
// 	}
// }

document.getElementsById('progress-bar').style.width = (successCards/cards)%;
document.getElementsById('progress-bar').innerHTML = (successCards/cards)%;
