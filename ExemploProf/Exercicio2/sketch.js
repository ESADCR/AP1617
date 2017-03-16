var diameter; 
var angle = 0;

function setup() {
  createCanvas(710, 400);
  diameter = height - 10;
  noStroke();
  fill(255, 63, 0);
}

function draw() {
  background(0);

  var d1 = 10 + (sin(angle) * diameter/2) + diameter/2;
  var d2 = 10 + (sin(angle + PI/2) * diameter/2) + diameter/2;
  var d3 = 10 + (cos(angle + PI) * diameter/2) + diameter/2;
  
  ellipse(0, height/2, d1, d1);
  ellipse(width/2, height/2, d2, d2);
  ellipse(width, height/2, d3, d3);
  
  angle += 0.02;
}