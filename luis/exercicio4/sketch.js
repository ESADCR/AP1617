var x, y;

function setup() {
  createCanvas(1500, 725);


  y = height;
}

function draw() {
  background(200);


  stroke(50);
  fill(0);
  ellipse(x,50, 50, 50);

  x = x - 10;


  if (x < 10) {
    x = width;
  }
}
