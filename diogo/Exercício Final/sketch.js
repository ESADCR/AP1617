
var localX = 640;
	localY = 360;
	velocidade = 10;

function setup(){
	createCanvas(1280,720);
}



function draw(){
	background(25); 
	noCursor();

	//retangulos 
	fill(90);
	rect(0,mouseY,25,200);
	rect(1255,mouseY,25,200);

	//bola
	fill(80,143,244);
	noStroke();
	ellipse(localX, localY, 60, 60);

	localX += velocidade;

    if (localX > 1220) {
		velocidade = - velocidade;
		localY = random(localY);
    	}

	if (localX < 50) {
    	velocidade = - velocidade;
    	localY = random(localY);
    	}

	if (localY <= 50) {
    	localY = 500;
    	}
      
}