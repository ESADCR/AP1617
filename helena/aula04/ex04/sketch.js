var posicaoX = 0;
var raio = 20;
var velocidade = 0;
var direcao = 1;



function setup() {

createCanvas(1000, 600);
background(255);

fill(51);





}

function draw() {
background(255)


velocidade = map(mouseX,width,0,10,0);






ellipseMode(CENTER);  

ellipse(posicaoX,height/6, 100, 100);  
c = color(96,247,240);  
fill(c);

line(posicaoX, height/6, 50, 100);
stroke(200);



posicaoX = posicaoX+velocidade*direcao;

raio = map(posicaoX,0,width,100,80);



if(posicaoX >= width-raio && direcao > 0){

	direcao = -8;

	}

if(posicaoX <= 0+raio && direcao < 0){
    
    posicaoX = 1+raio;
	direcao = 1;

	}	
 
}