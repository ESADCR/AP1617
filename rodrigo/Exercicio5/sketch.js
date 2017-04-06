function setup() {
  createCanvas(600, 600);  
}

function draw() {
  background(51);
  strokeWeight(4);
  stroke(255);

  for (var x = 0; x <= mouseX; x += 50) {
    for (var y = 0; y <= height; y += 50) {
    fill((230), 0, (230));
    ellipse(x, y, 25, 25);
    }
  }
  

  
}