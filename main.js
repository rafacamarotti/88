canvas = new fabric.Canvas('myCanvas');
// Crie uma variável canvas

//Defina as posições iniciais da bola e do buraco.
ballX=0;
ballY=0;
holleY=400;
holleX=800;


blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		holeobj= Img;
		holeobj.scaleToWidth(50);
		holeobj.scaleToHeight(50);
		holeobj.set({
			top:holleY,
			left:holleX
		});
		canvas.add(holeobj);
	});
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ballobj= Img;
		ballobj.scaleToWidth(50);
		ballobj.scaleToHeight(50);
		ballobj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ballobj);
	});
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballX == holleX)&&(ballY == holleY)){
		canvas.remove(ballobj);
		document.getElementById("hd3").innerHTML="voce atingiu o objetivo";
		document.getElementById("myCanvas").style.borderColor="red";
	}

	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY >= 5){
			ballY= ballY - blockImageHeight;
			canvas.remove(ballobj);
			newImage();
		}
	}

	function down()
	{
		if(ballY <= 450){
			ballY= ballY + blockImageHeight;
			canvas.remove(ballobj);
			newImage();
			}
	}

	function left()
	{
		if(ballX >=5)
		{
			
				ballX= ballX - blockImageWidth;
				canvas.remove(ballobj);
				newImage();
				
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX= ballX + blockImageWidth;
			canvas.remove(ballobj);
			newImage();
		}
	}
	


