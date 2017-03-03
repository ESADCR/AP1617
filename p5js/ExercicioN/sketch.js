


function setup() {

  createCanvas(800, 600);

}

function draw() {
  background(0);

  
  
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 90, 8); 
  pop();
  
  push();
  translate(width*0.6, height*0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 90, 8); 
  pop();
  
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -400.0);
  polygon(0, 0, 90, 8); 
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