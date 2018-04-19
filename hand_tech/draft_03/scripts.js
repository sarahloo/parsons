$(document).on("pagecreate","#pageone",function(){
 
  $("#window").on("tap",function(){
    $("p").text("hey!");
  });

  $("#window").on("taphold",function(){
    $("p").text("...yes?");
  });  

  $("#window").on("swipe",function(){
    $("p").text("that tickles!");
  });  

});