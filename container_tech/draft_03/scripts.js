$(function(){

 $("select").on("change",function(){
  $("img").css( 'opacity', '0' );
  $("."+this.value).css( 'opacity', '1' );

 });

});