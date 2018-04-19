$(document).on("pagecreate","#pageone",function(){
 
  $("#window").on("tap",function(){
	responsiveVoice.speak("Hey!", "UK English Female");
  });

  $("#window").on("taphold",function(){
	responsiveVoice.speak("Ow, ow, ow", "UK English Female");
  });  

  $("#window").on("swipe",function(){
	responsiveVoice.speak("That tickles!", "UK English Female");
  });  

});