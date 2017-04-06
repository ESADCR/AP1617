
var x, y;

function setup() {
  createCanvas(600, 600);
  x = width / 2;
  y = height;
}

function draw() {
  background(51);
  
 
  stroke(250);
  fill(250);
  ellipse(x, y, 30, 30);
  
  y = y - 3;
  
  if (y < 0) {
    y = height;
  }
}