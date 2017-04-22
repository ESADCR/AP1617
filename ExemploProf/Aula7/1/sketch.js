
var posY = 100;
var velocidade = 1;
var aceleracao = .98;
var raio = 20;
var acelImpact = -1.1;
var bol = false;



function setup() {

createCanvas(600,400);

colorMode(RGB);
background (0);
noStroke();
fill(200,30,20);
textSize(20);


posY = 0;



}

function draw() {

background (0);
text (int(velocidade), 10,50);
text (acelImpact, 10,65);


for(var i = 0; i < 20; i++){
colorir(velocidade,bol);
ellipse (i*(width/20),posY/2,raio,raio);

posY = posY+velocidade;
velocidade = velocidade + aceleracao;



if (posY > height*2-raio || posY <= 0+raio && velocidade < 0 ) {
  velocidade = velocidade * acelImpact;
  if (velocidade > 200 && acelImpact == -1.1){
    acelImpact = -0.9;
    bol= true;}

}

}
}

function colorir (vel, liga){

var opt = liga;
var randomGrau = vel;

fill (random(250-randomGrau),random(250-randomGrau),random(250-randomGrau));

if (opt == true){
 fill(250,0,0);
}

}
