// get elements by classname of the board
//find total bg-success cards over cards

// var cards = document.getElementsByClassName('cards-select').length;
// var successCards = $('.cards-select.bg-success').length;

// for(var i = 0; i < cards; i++){
// 	if ($class*="bg-success"){
// 		successCards += 1;
// 	}
// }

$(document).ready(function(){
var cards = document.getElementsByClassName('cards-select').length;
var successCards = $('.cards-select.bg-success').length;
if ((successCards / cards) === NULL){
	return 0%;
}
else{
document.getElementById('progress-bar').style.width = (Math.round(( 100 * (successCards/cards)))) + '%';
document.getElementById('progress-bar').innerHTML = (Math.round((100 * (successCards/cards)))) + '%';
}
});
