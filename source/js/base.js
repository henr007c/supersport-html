$(document).ready(function(){
	$(".button-collapse").sideNav();
	
  	$('.slider').slider({
  		height: 650
  	});
  	
  	// Pause slider
	$('.slider').slider('pause');
	// Start slider
	$('.slider').slider('start');
	// Next slide
	$('.slider').slider('next');
	// Previous slide
	$('.slider').slider('prev');
});