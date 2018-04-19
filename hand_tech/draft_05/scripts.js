$(document).on("pagecreate","#pageone",function(){
 
  $("#window").on("tap",function(){
	$("#gasp")[0].play();
  });

  $("#window").on("taphold",function(){
	$("#ow")[0].play();
  });  

  $("#window").on("swipe",function(){
	$("#giggle")[0].play();
  });  

});