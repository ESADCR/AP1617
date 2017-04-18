var posY;
var velocidade = 5;



function setup() {

	createCanvas(800,600);

	colorMode(RGB);
	background ('LightBlue');
	noStroke();
	fill('LightCoral');
	textSize(20);


	posY = 0;
}

function draw() {

	background ('LightBlue');
	ellipse (width/2,posY,15,15);
	rect(width/2-25,0,50,10);
	rect(width/2-25,590,50,10);
	posY = posY+velocidade;

	if (posY>600||posY<5) {
	  velocidade=-velocidade;
	}
 
}