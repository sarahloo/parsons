$(document).on("pagecreate","#pageone",function(){
 
  $("#window").on("tap",function(){
    $(this).css('background-color', 'rgb(150, 200, 255)');
  });

  $("#window").on("taphold",function(){
    $(this).css('background-color', 'rgb(255, 95, 30)');
  });  

  $("#window").on("swipe",function(){
    $(this).css('background-color', 'rgb(255, 195, 0)');
  });  

});