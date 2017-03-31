var posicaoX = 0;
var raio = 20;
var velocidade = 0;
var direcao = 1;



function setup() {

createCanvas(950, 820);
background(255);

fill(51);





}

function draw() {
background(200)


velocidade = map(mouseX,width,0,0,50);


ellipseMode(RADIUS); 
fill(255);  
ellipse(posicaoX,height/2,raio,raio);



ellipseMode(CENTER);  

ellipse(posicaoX,height/2, 100, 75);  
c = color(205, 92, 92);  
fill(c);


ellipse(posicaoX,height/2,raio,raio);


line(posicaoX, height/2, 500, 60);
stroke(110);




posicaoX = posicaoX+velocidade*direcao;

raio = map(posicaoX,0,width,100,30);



if(posicaoX >= width-raio && direcao > 0){

	direcao = -2;

	}

if(posicaoX <= 0+raio && direcao < 0){
    
    posicaoX = 1+raio;
	direcao = 1;

	}	
 
}