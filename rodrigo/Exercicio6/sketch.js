var bolaX = 300;
var bolaY = 300;
var velo = 3;

function setup() {
	createCanvas(600,600);
}

function draw() {
	background(51);
	fill(255);
	ellipse(bolaX, bolaY, 30, 30);
	bolaX+=velo;
	if(bolaX > 600 - 30 / 3) {
		velo = -velo;
	}
	if(bolaX < 0 + 30 / 3){
		velo = -velo;
	}
}