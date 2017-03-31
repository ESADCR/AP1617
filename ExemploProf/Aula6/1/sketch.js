
var posY;
var velocidade = 1;
var aceleracao = .98;



function setup() {

createCanvas(800,600);

colorMode(RGB);
background (0);
noStroke();
fill(200,30,20);
textSize(20);


posY = 0;



}

function draw() {

background (0);
ellipse (width/2,posY/2,20,20);

posY = posY+velocidade;
velocidade = velocidade + aceleracao;

if (posY > height*2-10) {
  velocidade = velocidade * -0.85;
}
 
}