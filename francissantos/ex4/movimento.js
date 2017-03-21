var x, y;

function setup() {
  createCanvas(720, 400);


  y = height;
}

function draw() {
  background(200);
  

  stroke(50);
  fill(0);
  ellipse(50, y, 50, 50);
  
  y = y - 2;
  

  if (y < 5) {
    y = height;
  }
}