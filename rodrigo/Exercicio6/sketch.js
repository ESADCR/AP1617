var circuloX;
var xvel = 2;

function setup(){
	size(640, 360);
	circuloX = 0;

}

function draw(){
	background(50);
	fill(102);
	stroke(255);
	ellipse(circuloX, height/2, 32, 32);

	circuloX = circuloX + xvel;

	If(circuloX > width){
		xvel = -10;
	}

	If(circuloX < 0){
	xvel = 10;

	}
}