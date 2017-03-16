function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  	createCanvas(1024, 768);
  	background(25,25,112)
}

function draw() {



fill(171, 140, 17);
ellipse(150, 70, 60, 120);  // orelha esq
fill(171, 140, 17);
ellipse(240, 70, 60, 120);  // orelha drt
fill(204, 189, 26);
ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);
ellipse(170, 150, 10, 10);  // oljho esq
ellipse(230, 150, 10, 10);  // olho drt

line(150, 200, 250, 200);   // boca

noFill();
rect(185, 200, 15, 10); // dente esq
rect(200, 200, 15, 10); // dente drt

	
}
