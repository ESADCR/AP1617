var x = new Array(20);
var y = new Array(20);
var segLength = 20;

function setup() {
  createCanvas(1920, 1080);
  strokeWeight(12);
  stroke(255, 110);
  for(var i=0; i<x.length; i++) {
    x[i]=0;
    y[i]=0;
  }
}

function draw() {
  background(0);
  drawSegment(0, mouseX, mouseY);
  for(var i=0; i<x.length-1; i++) {
    drawSegment(i+1, x[i], y[i]);
  }
}

function drawSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
