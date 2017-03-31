
function setup() {
	createCanvas(1800, 900);
}

function draw() {
  stroke(0,0,0)
  fill(181,0,0)

  /*olhos*/
  strokeWeight(9)
  arc(220, 130, 200, 200, 0, PI+QUARTER_PI, CHORD) //olho esquerdo
  arc(520, 130, 200, 200, -QUARTER_PI, PI, CHORD) //olho direito

/*nariz*/
  strokeWeight(9)
  triangle(320,280,420,280,370,220)

/*contorno*/
  strokeWeight(10);
  line(100,20,640,20)
  line(100,20,20,170)
  line(20,170,170,400)
  line(640,20,720,170)
  line(720,170,570,400)

  line(170,400,220,350)
  line(220,350,270,400)
  line(270,400,320,350)
  line(320,350,370,400)
  line(370,400,420,350)
  line(420,350,470,400)
  line(470,400,520,350)
  line(520,350,570,400)

/*boca*/
  strokeWeight(10)
  line(170,450,220,400)
  line(220,400,270,450)
  line(270,450,320,400)
  line(320,400,370,450)
  line(370,450,420,400)
  line(420,400,470,450)
  line(470,450,520,400)
  line(520,400,570,450)
  line(170,450,250,550)
  line(570,450,490,550)
  line(259,550,490,550)
}