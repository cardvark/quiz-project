$(document).ready(function(){
	$(".answerItems").selectable();

	$(".answerBox").click(function(){ 
		$(this).addClass("ui-selected").siblings().removeClass("ui-selected");
	});

});