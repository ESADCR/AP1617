function setup() {
 createCanvas(800, 500)
}

function draw() {
  background(102);
  
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 100);
  polygon(0, 0, 82, 12); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 100);
  polygon(0, 0, 80, 8); 
  pop();
  
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / 100);
  polygon(0, 0, 80, 4); 
  pop();
}
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}