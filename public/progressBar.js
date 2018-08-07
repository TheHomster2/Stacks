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
  var percentage = successCards / cards;
  if(successCards < 1 || cards < 1) {
    percentage = 0;
  }
  document.getElementById('progress-bar').style.width = (Math.round(( 100 * percentage))) + '%';
  document.getElementById('progress-bar').innerHTML = (Math.round((100 * percentage))) + '%';
});
