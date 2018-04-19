$(document).on("pagecreate","#pageone",function(){
 
  $("#window").on("tap",function(){
	$("#animation").addClass("flash");
	setTimeout(function() { $("#animation").removeClass("flash"); }, 250);
  });

  $("#window").on("taphold",function(){
	$("#animation").addClass("enlarge");
	setTimeout(function() { $("#animation").removeClass("enlarge"); }, 1000);
  });  

  $("#window").on("swipe",function(){
	$("#animation").addClass("jiggle");
	setTimeout(function() { $("#animation").removeClass("jiggle"); }, 500);
  });  

});