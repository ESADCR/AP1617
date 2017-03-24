function setup() {
  createCanvas(900, 700);
  background(255, 204, 0);

}

function draw() {
	background(255, 204, 0);
	/*cara do boneco*/
	fill('#fae');
	ellipse(400,300, 200, 200);
	/*olhos do boneco*/
	ellipse(440, 280, 35, 40);
	ellipse(360, 280, 35, 40);
	/*boca do boneco*/
	fill('#fae');
	arc(400, 350, 70, 50, 6, 3,5);
	/*iris dos olhos*/
	fill(51);
	ellipse(360, mouseY-200, 15, 20);
	ellipse(440, mouseY-200, 15, 20);
	/*boca*/
	ellipse(400, 315, 15, 20);
	/*tronco do boneco*/
	fill('red');
	ellipse(400, 550, 200, 300);
	/*botões*/
	fill(color(0, 0, 255));
	ellipse(400, 490, 40, 40);
	ellipse(400, 560, 40, 40);
	ellipse(400, 635, 40, 40);
}
