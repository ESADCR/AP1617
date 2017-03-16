
var posicaoX = 0;
var raio = 20;
var velocidade = 10;
var direcao = 1;

function setup() {

createCanvas(800, 600);
background(255);

fill(0);





}

function draw() {
background(255);

velocidade = map(mouseY,height,0,0,100);

ellipse(posicaoX,height/2,raio,raio);

posicaoX = posicaoX+velocidade*direcao;

raio = map(posicaoX,0,width,20,70);

//se a posicao em X for maior ou igual ao width então o passo volta a zero

//if position greater or equal to the width then postion equals zero

if(posicaoX >= width-raio && direcao > 0){

	direcao = -1;

	}

if(posicaoX <= 0+raio && direcao < 0){
    
    posicaoX = 0+raio;
	direcao = 1;

	}	
 
}