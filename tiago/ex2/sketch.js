var diameter; 
var angle = 0;

function setup() {
  createCanvas(700, 400);
  diameter = height - 10;
  noStroke();
  fill(255, 10, 50);
}

function draw() {
  background(0);

  var d1 = 5 + (sin(angle) * diameter/2) + diameter/2;
  var d2 = 30 + (sin(angle + PI/2) * diameter/2) + diameter/2;
  var d3 = 10 + (cos(angle + PI) * diameter/2) + diameter/2;
  
  ellipse(0, height/6, d1, d1);
  ellipse(width/2, height/8, d2, d2);
  ellipse(width, height/1, d3, d3);
  
  /******* temporizador **************/
  angle += 0.05;
}