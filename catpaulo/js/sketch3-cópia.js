var x, y;

var passo = 5;
var passox = 30;
var passoy = 20;
var direcao = 5;
var passo2 = 30;
var randow = 1;

function setup() {
	createCanvas(1200, 600);
  background(255);

  x = width / 2;
  y = height / 2;

}

function draw() {

  background(0)

  ellipse(passox, 200, 10, 10);
  ellipse(passo2, x, 90, 20);
  ellipse(x, y, 40, 40);
  ellipse(passo, passoy, 40, 40);
  ellipse(400, passo2, 60, 60);
  ellipse(90, y, direcao, x);

  ellipse(1000, 90, 10, 10);
  ellipse(800, 170, 20, 20);
  ellipse(700, 230, 30, 30);
  ellipse(900, 440, 4, 4);
  ellipse(600, 320, 50, 50);
  ellipse(800, 269, 6, 6);

  ellipse(2000, 80, 10, 10);
  ellipse(900, 130, 20, 20);
  ellipse(400, 270, 31, 32);
  ellipse(300, 200, 40, 40);
  ellipse(200, 390, 5, 5);
  ellipse(900, 259, 10, 10);

  x = y + random(-7, -1);
  passo = y + random(-9, -2);
  passox = y + random(-1, -4);
  direcao = passo + random(10, -4);
  passo2 = x + random(-5, -1);

  y = x - 4;

  if (y < 0) {
    y = height;
  }

}
