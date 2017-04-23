var ballSPD = 10;
var ballX = 225;
var ballY = 225;


function setup() {
	createCanvas(550, 500);
}

function draw() {
	background(51);
	fill(255);
	ellipse(ballX, ballY, 30, 30);
  rect(500, 180, 20, 80);
	rect(10, 180, 20, 80);

	ballX += ballSPD;

if(ballX > 500 - 30 / 2) {
	ballSPD = -ballSPD;
	}
 if(ballX < 50 - 30 / 2) {
		ballSPD = -ballSPD;
	}
}
