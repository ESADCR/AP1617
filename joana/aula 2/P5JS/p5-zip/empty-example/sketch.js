
/*
var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("assets/http://viralswim.com/wp-content/uploads/2016/04/andy-warhol-campbells-tomato-soup.jpg");
}

function setup() {
createCanvas(720, 400);
  smallPoint = 6;
  largePoint = 60;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
 
}

function draw() {
 var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}265 margin left
*/


var x;
var y;
var outsideRadius = 200;
var insideRadius = 100;

function setup() {
  createCanvas(720, 400);
  background(204);
  x = width/2;
  y = height/2;
}

function draw() {
  background(204);
  
  var numPoints = int(map(mouseX, 0, width, 6, 60));
  var angle = 0;
  var angleStep = 360.0/numPoints;
    
  beginShape(TRIANGLE_STRIP); 
  for (var i = 0; i <= numPoints; i++) {
    var px = x + cos(radians(angle)) * outsideRadius;
    var py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();
}
