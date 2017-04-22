var ballSPD = 2;
var ballX = 20;
var ballY = 225;
var ballSPD2 = 8;
var ballx2 = 20;
var bally2 = 100;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(51);
	fill(255);
	ellipse(ballX, ballY, 30, 30);
	ellipse(ballX, ballY, 10, 50);
  

	ballX += ballSPD;

	if (ballX > 800 - 30 / 2) {
		ballSPD = -ballSPD;
	}
	if (ballX < 0 + 30 / 2) {
		ballSPD = -ballSPD;
	}


	ballX += ballSPD2;

	if (ballX > 800 - 30 / 2) {
		ballSPD2 = -ballSPD2;
	}
	if (ballX < 0 + 30 / 2) {
		ballSPD2 = -ballSPD2;
	}

}


