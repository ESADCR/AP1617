function setup() {
  createCanvas(1024, 768);
  background(25,67,5)



}

function draw() {
	ellipse(512, 80, 65, 75);
	fill(0,191,255)
	ellipse(496, 74, 10, 15);
	ellipse(524, 74, 10, 15);
	stroke(0,0,0)
	arc(510, 85, 10, 15, 0, PI+QUARTER_PI, CHORD);
	noFill();
	
	arc(505, 40, 30, 20, HALF_PI, PI);
	arc(505, 40, 30, 20, HALF_PI, PI);
	arc(508, 37, 30, 20, HALF_PI, PI);
	arc(512, 35, 30, 20, HALF_PI, PI);
	arc(517, 36, 30, 20, HALF_PI, PI);
	arc(520, 37, 30, 20, HALF_PI, PI);
	arc(523, 37, 30, 20, HALF_PI, PI);
	arc(523, 98, 45, 10, HALF_PI, PI);

}	