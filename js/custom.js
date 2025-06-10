$(function() {
// OPACITY OF BUTTON SET TO 50%
$("ul.topNav li").css("opacity","0.5");
		
// ON MOUSE OVER
$("ul.topNav li").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "slow");
});
});

/*
$(function() {
// OPACITY OF BUTTON SET TO 50%
$(".textBox").css("opacity","0.5");
		
// ON MOUSE OVER
$(".textBox").hover(function () {
										  
// SET OPACITY TO 1000%
$(this).stop().animate({
opacity: 1.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "slow");
});
});


$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#div").css("opacity","0.5");
		
// ON MOUSE OVER
$("#div").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "slow");
});
});
*/