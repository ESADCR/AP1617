function setup() {
  createCanvas(1280, 720);
}

function draw() {
  stroke(0,600,255);
  strokeWeight(3);
  /*olhos*/
  line(300,100,150,100);
  line(300,100,100,150);
  strokeWeight(1)
  fill(88, 131, 181)
  ellipse(280, 75, 105, 60);

  strokeWeight(3)
  fill(25,25,25);
  line(600,100,400,100);
  line(400,100,640,150);
  strokeWeight(1)
  fill(88, 131, 181)
  ellipse(425,75,105,60);

/*boca*/
 strokeWeight(5)
  line(260,250,310,250);
  line(320,250,370,250);
  line(380,250,430,250);
 strokeWeight(10)
  line(320,300,370,300);

/*nariz*/
  strokeWeight(1);
  fill(88, 131, 181);
  triangle(300,200,400,200,350,150);

/*contorno*/
  strokeWeight(10);
  line(20,20,700,20);
  strokeWeight(10);
  line(20,20,170,400);

  line(700,20,570,400)

  line(170,400,220,350)
  line(220,350,270,400)
  line(270,400,320,350)
  line(320,350,370,400)
  line(370,400,420,350)
  line(420,350,470,400)
  line(470,400,520,350)
  line(520,350,570,400)
}