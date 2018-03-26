$(function(){

 $("select").on("change",function(){
  $("img").css( 'padding', '4em' );
  $("."+this.value).css( 'padding', '0' );

 });

});