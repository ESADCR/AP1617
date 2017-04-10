var ballX = 190;
var ballY = 160;
var ballSPD = 9;

function setup() {
  createCanvas(1263, 298);
}

function draw() {
  background(204);
  colorMode(RGB);
  fill(131, 139, 131);
  rect(1, 110, 15, 100);
  rect(1245, 110, 15, 100);
  fill(240, 255, 240);
  ellipse(ballX, ballY, 40, 40);
  ballX+=ballSPD;
  if (ballX > 1230 - 20 / 2) {
    ballSPD = -ballSPD;
  }
  if (ballX < 26 + 30 / 2) {
    ballSPD = -ballSPD;

    
  }

}


