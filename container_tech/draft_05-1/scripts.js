$(function(){

 $("select").on("change",function(){
  $("img").css( 'border', '0' );
  $("."+this.value).css( 'border', '3px black solid' );

 });

});