$(document).ready(function(){

  newGrid(16);

  $('.grid').mouseover(colored);

  $('#new_grid').on('click', function(){
    $('.grid').css({'opacity': '0.1'});
    var numberOfNewSqueres = prompt("How big would you like your new grid was?", 16);
    if(numberOfNewSqueres !== null){
      if(numberOfNewSqueres < 1 || numberOfNewSqueres > 100){
        alert("Given number is out of range! Please try again :)");
      }else{
        squereSize = (512/numberOfNewSqueres);
        newGrid(numberOfNewSqueres);
        $('.grid').css({'height': squereSize + 'px', 'width': squereSize + 'px'});
      }
    }
    $('.grid').mouseover(colored);
  });

  function newGrid(squere){
    var numberOfSqueres = squere*squere;
    $('#wrapper').empty();
    for(i=0; i<numberOfSqueres; i++){
      $("#wrapper").append("<div class='grid'></div>");
    }
  }

  function colored(){
    var opacityNow = +$(this).css('opacity');
    if(opacityNow < 1){
      opacityNow += 0.1;
    }else{
      return false;
    }
    $(this).css({'opacity': opacityNow});
  }
});
