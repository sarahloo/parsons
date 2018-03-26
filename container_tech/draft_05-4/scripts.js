$(function(){

 $("select").on("change",function(){
  $("img").css( 'transform', 'rotateX(90deg)' );
  $("."+this.value).css( 'transform', 'rotateX(0deg)' );

 });

});