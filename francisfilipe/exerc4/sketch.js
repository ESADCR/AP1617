
var posicaoX = 0;
var raio = 20;
var velocidade = 10;
var direcao = 1;

function setup() {

createCanvas(800, 600);
background(255);

fill(20);

}

function draw() {
background(255);


ellipseMode(CENTER);  
ellipse(posicaoX,height/10, 100, 75);  
c = color(92, 205, 122);  
fill(c);

ellipse(posicaoX,height/10,raio,raio);

posicaoX = posicaoX+velocidade*direcao;

raio = map(posicaoX,0,width,20,70);

//se a posicao em X for maior ou igual ao width então o passo volta a zero

if(posicaoX >= width-raio && direcao > 0){

	direcao = -3;

	}

if(posicaoX <= 0+raio && direcao < 0){
    
    posicaoX = 5+raio;
	direcao = 1;

	}	
 
}