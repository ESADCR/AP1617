var posicaoX = 0;
var raio = 20;
var velocidade = 4;
var direcao = 1;

function setup() {

	createCanvas(800, 600);
  background(255);

  fill(0);

}

function draw() {

  background(255);

  ellipse(posicaoX, height/2, raio, raio);

  posicaoX = posicaoX+velocidade*direcao;

  raio = map(posicaoX,0,width,50,120);

  /*se o posicaoX for maior ou igual ao width então o posicaoX volta a 0*/
  /*if position greater or equal to the width then position equals 0*/

  if (posicaoX >= width-raio && velocidade > 0); {

    direcao = 1;

  }

  if (posicaoX <= width-raio && direcao < 0); {

    direcao = 1;

  }

}
