var ballX = 300;
var ballY = 300;
var ballSPD = 2;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(51);
	fill(255);
	ellipse(ballX, ballY, 30, 30);
	/* ellipse(ballX1, ballY1, 30, 30); */

	ballX += ballSPD;

	text("EXERCICIO PONG", 230, 230);
	if (ballX > 600 - 30 / 2) {
		ballSPD = -ballSPD;
	}
	text("Se tu o desejas, podes voar, só tens de confiar muito em ti.", 130, 305);
	if (ballX < 0 + 30 / 2) {
		ballSPD = -ballSPD;
	}

}