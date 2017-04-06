var ballSPD = 2;
var ballX = 20;
var ballY = 225;
var ballSPD = 8;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(51);
	fill(255);
	ellipse(ballX, ballY, 30, 30);
  rect(1000, 180, 20, 80);

	ballX += ballSPD;

	if (ballX > 1000 - 30 / 2) {
		ballSPD = -ballSPD;
	}
	if (ballX < 0 + 30 / 2) {
		ballSPD = -ballSPD;
	}

}
