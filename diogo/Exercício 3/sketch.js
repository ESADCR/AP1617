function setup() {
  createCanvas(1280, 720);
  background(20,20,20)
}

function draw() {
  /*
  stroke(0,600,255);
  strokeWeight(3);
  //olhos
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

//boca
 strokeWeight(5)
  line(260,250,310,250);
  line(320,250,370,250);
  line(380,250,430,250);
 strokeWeight(10)
  line(320,300,370,300);

  //nariz
  strokeWeight(1);
  fill(88, 131, 181);
  triangle(300,200,400,200,350,150);

//contorno
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
}*/

//contorno 1
//contorno esquerdo
  strokeWeight(5);
  stroke(158, 123, 49);
  line(width/2,120,620,100);

  line(620,100,520,100);

  line(520,100,370,200);

  line(370,200,520,600);

  line(520,600,width/2,600);

  //contorno direito
  line(width/2,120,660,100);

  line(660,100,760,100);

  line(760,100,910,200);

  line(910,200,760,600);

  line(760,600,width/2,600);

  //contorno 2
  //contorno esquerdo
  strokeWeight(3)
  line(width/2,140,620,120);

  line(620,120,520,120);

  line(520,120,395,205);

  line(395,205,540,580);

  line(540,580,width/2,580);

  //contorno direito
  line(width/2,140,660,120);

  line(660,120,760,120);

  line(760,120,880,205);

  line(880,205,740,580);

  line(740,580,width/2,580);


  //linha meio olhos
  strokeWeight(5)
  line(width/2,140,width/2,180);

  //olhos
  //olho esquerdo
  line(520,180,570,180);

  line(570,180,580,205);

  line(580,205,570,225);

  line(570,225,520,225);

  line(520,225,510,205);

  line(510,205,520,180);

  noStroke()
  fill(147, 105, 65);
  ellipse(557,215,30,20);

  //olho direito
  stroke(158, 123, 49);
  line(760,180,710,180);

  line(710,180,700,205);

  line(700,205,710,225);

  line(710,225,760,225);

  line(760,225,770,205);

  line(770,205,760,180);

  noStroke()
  fill(147, 105, 65);
  ellipse(724,215,30,20);

  //boca
  //esquerda
  stroke(158, 123, 49);
  line(width/2,460,610,500);

  line(610,500,510,500);

  line(510,500,610,300);

  //direita
  line(width/2,460,670,500);

  line(670,500,770,500);

  line(770,500,670,300);

  //focinho
  fill(229, 212, 167);
  triangle(width/2,460,600,400,680,400)

}