var col = 0;

function setup() {
	createCanvas(800, 600);
}


function draw() {
	background(col);
	col = mouseX;
	fill(200, 118, 50);
	ellipse(mouseX, mouseY, 60,60);
}