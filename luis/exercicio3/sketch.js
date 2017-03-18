function setup() {
  createCanvas(640, 480);
}

function draw() {
  ellipse(80, 80, 75, 85);
  ellipse(70, 74, 10, 15);
  ellipse(90, 74, 10, 15);
  stroke(0,0,0);
  arc(77, 100, 20, 20, 0, PI+QUARTER_PI, PIE);
  arc(40, 80, 15, 15, 20, 25, PI+QUARTER_PI, OPEN);

  arc(75, 50, 50, 50, 30, 25, PI+QUARTER_PI, CHORD);
  arc(70, 50, 50, 50, 30, 25, PI+QUARTER_PI, CHORD);
  arc(65, 50, 50, 50, 30, 25, PI+QUARTER_PI, CHORD);
  arc(60, 50, 50, 50, 30, 25, PI+QUARTER_PI, CHORD);
  arc(55, 50, 50, 50, 30, 25, PI+QUARTER_PI, CHORD);
  arc(50, 50, 50, 50, 30, 25, PI+QUARTER_PI, CHORD);
  arc(45, 50, 50, 50, 30, 25, PI+QUARTER_PI, CHORD);
}
