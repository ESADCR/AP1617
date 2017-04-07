function setup() {

  createCanvas(1280, 720);
  background(25,25,25);
}


function draw () {
	var y = 30;
	var x = 30;
	var yy = 700

	for (var y = 30; y < 1000; x = y = y + 30){
		noStroke()
		fill(119,140,150);
		ellipse(x,y,mouseX,mouseY);
	}


}
