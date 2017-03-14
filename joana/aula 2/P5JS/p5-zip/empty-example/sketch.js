

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
}