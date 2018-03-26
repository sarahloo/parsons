$(function(){

 $("select").on("change",function(){
  $("img").addClass('offscreen');
  $("."+this.value).removeClass( 'offscreen' );

 });

});