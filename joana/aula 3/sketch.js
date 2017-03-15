

/*cores:0(preto) a 255(branco)
ver o outro doc*/

function setup() {
	background(255)
	nofill()
}

function draw() {
 	line(30, 20, 85, 75);
 	ellipse(56, 46, 55, 55);
 	rect(30, 20, 55, 55, 20);
 	triangle(30, 75, 58, 20, 86, 75);
}

function mouseClicked(){
	background(255);	
}