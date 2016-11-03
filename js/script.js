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

  $('#blue').on('click', function(){
    $('.grid').mouseover(function(){
      if($(this).hasClass('new_green')){
        $(this).removeClass('new_green');
        $(this).addClass('new_blue');
      }else if($(this).hasClass('new_red')){
        $(this).removeClass('new_red');
        $(this).addClass('new_blue');
      }else if($(this).hasClass('new_yellow')){
        $(this).removeClass('new_yellow');
        $(this).addClass('new_blue');
      }else if($(this).hasClass('new_black')){
        $(this).removeClass('new_black');
        $(this).addClass('new_blue');
      }else if($(this).hasClass('new_eraser')){
        $(this).removeClass('new_eraser');
        $(this).addClass('new_blue');
      }else{
        $(this).addClass('new_blue');
      }
    });
  });

  $('#green').on('click', function(){
    $('.grid').mouseover(function(){
      if($(this).hasClass('new_blue')){
        $(this).removeClass('new_blue');
        $(this).addClass('new_green');
      }else if($(this).hasClass('new_red')){
        $(this).removeClass('new_red');
        $(this).addClass('new_green');
      }else if($(this).hasClass('new_yellow')){
        $(this).removeClass('new_yellow');
        $(this).addClass('new_green');
      }else if($(this).hasClass('new_black')){
        $(this).removeClass('new_black');
        $(this).addClass('new_green');
      }else if($(this).hasClass('new_eraser')){
        $(this).removeClass('new_eraser');
        $(this).addClass('new_green');
      }else{
        $(this).addClass('new_green');
      }
    });
  });

  $('#red').on('click', function(){
    $('.grid').mouseover(function(){
      if($(this).hasClass('new_green')){
        $(this).removeClass('new_green');
        $(this).addClass('new_red');
      }else if($(this).hasClass('new_blue')){
        $(this).removeClass('new_blue');
        $(this).addClass('new_red');
      }else if($(this).hasClass('new_yellow')){
        $(this).removeClass('new_yellow');
        $(this).addClass('new_red');
      }else if($(this).hasClass('new_black')){
        $(this).removeClass('new_black');
        $(this).addClass('new_red');
      }else if($(this).hasClass('new_eraser')){
        $(this).removeClass('new_eraser');
        $(this).addClass('new_red');
      }else{
        $(this).addClass('new_red');
      }
    });
  });

  $('#yellow').on('click', function(){
    $('.grid').mouseover(function(){
      if($(this).hasClass('new_green')){
        $(this).removeClass('new_green');
        $(this).addClass('new_yellow');
      }else if($(this).hasClass('new_red')){
        $(this).removeClass('new_red');
        $(this).addClass('new_yellow');
      }else if($(this).hasClass('new_blue')){
        $(this).removeClass('new_blue');
        $(this).addClass('new_yellow');
      }else if($(this).hasClass('new_black')){
        $(this).removeClass('new_black');
        $(this).addClass('new_yellow');
      }else if($(this).hasClass('new_eraser')){
        $(this).removeClass('new_eraser');
        $(this).addClass('new_yellow');
      }else{
        $(this).addClass('new_yellow');
      }
    });
  });

  $('#black').on('click', function(){
    $('.grid').mouseover(function(){
      if($(this).hasClass('new_green')){
        $(this).removeClass('new_green');
        $(this).addClass('new_black');
      }else if($(this).hasClass('new_red')){
        $(this).removeClass('new_red');
        $(this).addClass('new_black');
      }else if($(this).hasClass('new_yellow')){
        $(this).removeClass('new_yellow');
        $(this).addClass('new_black');
      }else if($(this).hasClass('new_blue')){
        $(this).removeClass('new_blue');
        $(this).addClass('new_black');
      }else if($(this).hasClass('new_eraser')){
        $(this).removeClass('new_eraser');
        $(this).addClass('new_black');
      }else{
        $(this).addClass('new_black');
      }
    });
  });

  $('#eraser').on('click', function(){
    $('.grid').mouseover(function(){
      if($(this).hasClass('new_green')){
        $(this).removeClass('new_green');
        $(this).addClass('new_eraser');
      }else if($(this).hasClass('new_red')){
        $(this).removeClass('new_red');
        $(this).addClass('new_eraser');
      }else if($(this).hasClass('new_yellow')){
        $(this).removeClass('new_yellow');
        $(this).addClass('new_eraser');
      }else if($(this).hasClass('new_blue')){
        $(this).removeClass('new_blue');
        $(this).addClass('new_eraser');
      }else if($(this).hasClass('new_black')){
        $(this).removeClass('new_black');
        $(this).addClass('new_eraser');
      }else{
        $(this).addClass('new_eraser');
      }
    });
  });

});
