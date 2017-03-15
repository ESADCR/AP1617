function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  	createCanvas(1024, 768);
  	background(25,25,112)
}

function draw() {
	//Cabeça
	ellipse(512, 80, 65, 72);
	//Olhos
 	fill(154,205,50)
 	//Olhos
 	ellipse(498, 74, 10, 12);
	ellipse(523, 74, 10, 12);
	//Nariz
	fill(0,0,0)
	ellipse(511, 82, 2, 2)
	//Cabeça
	fill(255,192,203)
	//Boca
	arc(510, 93, 16, 12, 0, PI+QUARTER_PI, CHORD);
	//Tronco
	line(510, 250, 510, 116);
	//Braço Esq.
	line(510, 140, 415, 100);
	//Braço Drt.
	line(510, 140, 600, 100);
	//Perna Drt.
	line(510, 250, 580, 380);
	//Perna Esq.
	line(510, 250, 450, 380);



fill(171, 140, 17);
ellipse(150, 70, 60, 120);  // left ear
fill(171, 140, 17);
ellipse(240, 70, 60, 120);  // right ear
fill(204, 189, 26);
ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);
ellipse(170, 150, 10, 10);  // left eye
ellipse(230, 150, 10, 10);  // right eye

line(150, 200, 250, 200);   // mouth

noFill();
rect(185, 200, 15, 10); // left tooth
rect(200, 200, 15, 10); // right tooth

	
}
