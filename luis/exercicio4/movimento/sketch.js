var posicaoX2 = 5;
var posicaoX = 0;
var raio = 30;
var velocidade = 15;
var direcao = 1;
var direcao2 = 1;

function setup() {

createCanvas(1400, 700);
background(0);






}

function draw() {
background(0);


ellipse(posicaoX,height/2,raio,raio);

posicaoX = posicaoX+velocidade*direcao;

raio = map(posicaoX,15,width,70,20);


ellipse (posicaoX2,height/2,raio,raio);

posicaoX = posicaoX+velocidade*direcao;

raio = map(posicaoX,15,width,20,70);

fill('red')

line(posicaoX, height/6, 0, 350);
stroke(150);

ellipse(posicaoX,height/6,raio,raio);

posicaoX = posicaoX+velocidade*direcao;

raio = map(posicaoX,15,width,70,20);

line(posicaoX, height/2, 0, 350);
stroke(150);


line(posicaoX, height/1, 0, 350);
stroke(150);

ellipse(posicaoX,height/1,raio,raio);

posicaoX = posicaoX+velocidade*direcao;

raio = map(posicaoX,15,width,70,20);


//se a posicao em X for maior ou igual ao width então o passo volta a zero

//if position greater or equal to the width then postion equals zero

if(posicaoX >= width-raio && direcao > 0){

	direcao = -1;

	}

if(posicaoX <= 0+raio && direcao < 1){

    posicaoX = 0+raio;
	direcao = 1;

	}
if(posicaoX2 >= width-raio && direcao2 > 1){

		direcao = 1;

		}

if(posicaoX2 <= 1+raio && direcao2 < 1){

	    posicaoX = 0+raio;
		direcao = -1;

		}

}
