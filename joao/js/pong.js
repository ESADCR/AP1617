var ballX = 300;
var ballY = 300;
var ballSPD = 2;
var ballX1 = 20;
var ballY1 = 225;
var ballSPD1 = 5;

function setup() {
  createCanvas(600, 350);
}

function draw() {
  background(51);
  fill('red');
  ellipse(ballX, ballY, 30, 30);
  ellipse(ballX1, ballY1, 30, 30);

  ballX += ballSPD;

  text( 225, 230);
  if (ballX > 600 - 30 / 2) {
    ballSPD = -ballSPD;
  }
  text( 130, 305);
  if (ballX < 0 + 30 / 2) {
    ballSPD = -ballSPD;
  }

  ballX1 += ballSPD1;

  if (ballX1 > 600 - 30 / 2) {
    ballSPD1 = -ballSPD1;
  }
  if (ballX1 < 0 + 30 / 2) {
    ballSPD1 = -ballSPD1;
  }

}