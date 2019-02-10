$(function(){
  //$(".news-display-selector").slice(0, 1).show(); // prikaže prvo sekcijo (brez klika)
  $("#show-more").click(function(e){ // click event for load more
    e.preventDefault();
    $(".news-display-selector:hidden").slice(0, 1).show(); // za vsak klik prikaže še eno sekcijo
    if($(".news-display-selector:hidden").length == 0){ // če sekcij ni več, gumb izgine
      $("#show-more").css("display", "none");
    }
  });
});
