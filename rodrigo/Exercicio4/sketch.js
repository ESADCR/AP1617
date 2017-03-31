var x, y;

function setup() {
  createCanvas(1280, 720);


  y = height;
}

function draw() {
  background(200);
  

  stroke(50);
  fill(0);
  triangle(30, 75, 58, 20, y, 75);
  
  y = y - 2;
  

  if (y < 5) {
    y = height;
  }
}