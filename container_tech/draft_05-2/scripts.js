$(function(){

 $("select").on("change",function(){
  $("img").css( 'background-colour', 'transparent' );
  $("."+this.value).css( 'background-color', 'yellow' );

 });

});