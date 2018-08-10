$(document).ready(function(){
    function updateProgress(){
      var cards = document.getElementsByClassName('cards-select').length;
      var successCards = $('.cards-select.list-group-item-success').length;
      var percentage = successCards / cards;
        if(successCards < 1 || cards < 1) {
          percentage = 0;
        }
        document.getElementById('progress-bar').style.width = (Math.round(( 100 * percentage))) + '%';
        document.getElementById('progress-bar').innerHTML = (Math.round((100 * percentage))) + '%';
      console.log("progress bar");
    }
    setInterval(updateProgress,100);
});