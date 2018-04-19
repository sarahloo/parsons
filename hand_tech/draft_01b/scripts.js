$(document).on("pagecreate","#pageone",function(){
 
  $("#window").on("tap",function(){
	responsiveVoice.speak("Hey!", "UK English Male");
  });

  $("#window").on("taphold",function(){
	responsiveVoice.speak("Ow, ow, ow", "UK English Male");
  });  

  $("#window").on("swipe",function(){
	responsiveVoice.speak("That tickles!", "UK English Male");
  });  

});