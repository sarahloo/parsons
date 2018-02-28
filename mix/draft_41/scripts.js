$(document).ready(function(){

	setTimeout(function(){
	    $("#liftoff")[0].play();
	}, 92000);

	$("#astronaut").mouseenter(function(){
		$(this).addClass("spin");
		$(this).css( 'cursor', 'pointer' );
		});
	$("#astronaut").mouseleave(function(){
		$(this).removeClass("spin");
		});
	$("#astronaut").click(function(){
		$("#glove").addClass("drift");
		});

	$("#laika").mouseenter(function(){
		$(this).css( 'cursor', 'pointer' );
		});

	$("#laika").click(function(){
		$("#doghowl")[0].play();
		});

     var laika = document.getElementById("laika");
		document.addEventListener("mousemove", getMouse); 

		laika.style.position = "absolute"; //css		
		var laikapos = {x:0, y:0};

		setInterval(followMouse, 100);
		
		var mouse = {x:0, y:0}; //mouse.x, mouse.y
		
		var dir = "right";
		function getMouse(e){
			mouse.x = e.pageX;
			mouse.y = e.pageY;
        //Checking directional change
        if(mouse.x > laikapos.x){
          dir = "right";
        } else {
          dir = "left";
        }
		}
		
		function followMouse(){
			//1. find distance X , distance Y
			var distX = mouse.x - laikapos.x;
			var distY = mouse.y - laikapos.y;
			//Easing motion
       //Progressive reduction of distance 
			laikapos.x += distX/20;
			laikapos.y += distY/20;
			
			laika.style.left = laikapos.x + "px";
			laika.style.top = laikapos.y + "px";
      
        //Apply css class 
        if (dir == "right"){
          laika.setAttribute("class", "right");
        } else {
          laika.setAttribute("class", "left");        
        }
			
		}

	});