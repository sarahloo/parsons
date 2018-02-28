$(document).ready(function(){
	$("#astronaut").mouseenter(function(){
		$(this).addClass("spin");
		});
	$("#astronaut").mouseleave(function(){
		$(this).removeClass("spin");
		});
	});