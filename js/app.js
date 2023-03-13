
$(document).ready(function(){  //hide and show when mouse over
$('.ryu').mouseenter(function() {
$('.ryu-still').hide();
$('.ryu-ready').show();
  })

$('.ryu').mouseleave(function() {
$('.ryu-still').show();
$('.ryu-ready').hide();
  })

.mousedown(function(){
  playHadouken();
$('.ryu-ready').hide();
  $('.ryu-throwing').show();
  //animate the hadouken to hide after a mouseup
 $('.hadouken').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
    }
  );

})

//hide and show the objs
.mouseup(function() {
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
    
});

});

//the audio
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.1;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

	 $(document).on('keydown', function(){
	 		if (event.which == 90) {
	 			$('.ryu-cool').show();
	 			$('.ryu-still').hide();
	 			$('.ryu-ready').hide();
	 			$('.ryu-throwing').hide();
	 			$('#hadouken-sound')[1].play();
	 			$('#cool-song')[0].play();
	 			
	 		}
	 	});

	 //key up, cool music stops and ryu returns to still state

	  $(document).on('keyup', function(){
	 		if (event.which === 90) {
	 			$('.ryu-cool').hide();
	 			$('.ryu-ready').hide();
	 			$('.ryu-throwing').hide();
	 			$('.ryu-still').show();
	 			$('#theme-song')[0].pause();
	 			$('#cool-song')[0].play();
	 		}
	 	});

	  // part 2


$(document).ready(function(){  //hide and show when mouse over
$('.ryu1').mouseenter(function() {
$('.ryu-still1').hide();
$('.ryu-ready1').show();
  })

$('.ryu1').mouseleave(function() {
$('.ryu-still1').show();
$('.ryu-ready1').hide();
  })

.mousedown(function(){
  playHadouken();
$('.ryu-ready1').hide();
  $('.ryu-throwing1').show();
  //animate the hadouken to hide after a mouseup
 $('.hadouken1').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
    }
  );

})

//hide and show the objs
.mouseup(function() {
  $('.ryu-throwing1').hide();
  $('.ryu-ready1').show();
    
});

});


	  	 $(document).on('keydown', function(){
	 		if (event.which == 88) {
	 			$('.ryu-cool1').show();
	 			$('.ryu-still1').hide();
	 			$('.ryu-ready1').hide();
	 			$('.ryu-throwing1').hide();
	 			$('#hadouken-sound')[0].pause();
	 			$('#cool-song')[0].play();
	 			
	 		}
	 	});

	 //key up, cool music stops and ryu returns to still state

	  $(document).on('keyup', function(){
	 		if (event.which === 88) {
	 			$('.ryu-cool1').hide();
	 			$('.ryu-ready1').hide();
	 			$('.ryu-throwing1').hide();
	 			$('.ryu-still1').show();
	 			$('#theme-song')[0].pause();
	 			$('#cool-song')[0].play();
	 		}
	 	});