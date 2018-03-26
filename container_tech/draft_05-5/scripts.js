$(function(){

 $("select").on("change",function(){
  $("img").css( 'transform', 'rotateY(90deg)' );
  $("."+this.value).css( 'transform', 'rotateY(0deg)' );

 });

});