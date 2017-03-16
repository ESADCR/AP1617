function setup() {
  createCanvas(800, 600);
  background(25,67,5)

}

function draw() {
	background(25,67,5);
	fill(255,255,255);
	ellipse(mouseX, mouseY, 65, 75);
	fill(0,191,255)
	ellipse(mouseX-16, mouseY-6, 10, 15);
	ellipse(mouseX+10, mouseY-6, 10, 15);
	stroke(0,0,0)
	arc(mouseX-2, mouseY+5, 10, 15, 0, PI+QUARTER_PI, CHORD);
	noFill();
	
	arc(mouseX-7, mouseY-40, 30, 20, HALF_PI, PI);
	arc(mouseX-7, mouseY-40, 30, 20, HALF_PI, PI);
	arc(mouseX-4, 37, 30, 20, HALF_PI, PI);
	arc(mouseX, mouseY-45, 30, 20, HALF_PI, PI);
	arc(mouseX+5, mouseY-44, 30, 20, HALF_PI, PI);
	arc(mouseX+8, mouseY-45, 30, 20, HALF_PI, PI);
	arc(mouseX+11, mouseY-46, 30, 20, HALF_PI, PI);
	arc(mouseX+11, mouseY+18, 45, 10, HALF_PI, PI);

}	