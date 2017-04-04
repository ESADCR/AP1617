var ballX = 300;
var ballY = 300;
var ballSPD = 2

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(51);
	fill(255);
	ellipse(ballX, ballY, 30, 30);
	ballX+=ballSPD;
	if (ballX > 600 - 30 / 2) {
		ballSPD = -ballSPD;
	}
	if (ballX < 0 + 30 / 2) {
		ballSPD = -ballSPD;
	}
}