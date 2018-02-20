function updateClock ( )
 	{
 	var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes  12 ) ? currentHours - 12 : currentHours;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  	
  	
   	$("#clock").html(currentTimeString);
 }

$(document).ready(function()
{
   setInterval('updateClock()', 1000);
});



// function () {

//   var clockElement = document.getElementById( "clock" );

//   function updateClock ( clock ) {
//     clock.innerHTML = new Date().toLocaleTimeString();
//   }

//   setInterval(function () {
//       updateClock( clockElement );
//   }, 1000);

// }();
