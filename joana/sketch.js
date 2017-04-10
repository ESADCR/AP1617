var x = 0;
var offset = 0;

function setup() {
  createCanvas(100, 600);
  background(204);
}

function draw() {
  
 
  var x = 0;

  for (var x = 0; x <= width; x += 150) {
    fill(13, 48, random(87));
    ellipse(x + offset, 100, 40, 40);
    ellipse(x + offset, 160, 30, 30);
    ellipse(x + offset, 210, 20, 20);
    ellipse(x + offset, 240, 10, 10);
  }

  offset = offset + 3;
}