$(document).ready(function() {

  for (i=0; i<256; i++){
    $(".wrapper").append("<div class='grid'></div>");
  }

  $(".main_button").click(function() {
    $(".grid").removeClass("color");
  });

  $(".grid").one("mouseover", function() {
  $(this).addClass('color');
  });

});
