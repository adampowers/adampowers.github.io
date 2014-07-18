$(document).ready(function() {
 $('.slider').nivoSlider({
 	effect: 'fade',
 	animSpeed: 500,
 	pauseTime: 10000,
 	directionNav: false,
 	controlNav: true
 });

 var width = 940 - $('#tabBar').width();
 $('#tabHome').width(width);

});