
var posY;
var velocidade = 1;
var aceleracao = .98;



function setup() {

createCanvas(1000,500);

colorMode(RGB);
background (0);
noStroke();
fill(255);
textSize(20);


posY = 0;



}

function draw() {

background (0);
ellipse (100,100,20,20);
ellipse (200,200,20,20);
ellipse (300,300,20,20);
ellipse (400,400,20,20);
ellipse (500,500,10,10);
ellipse (600,600,20,20);
ellipse (700,700,20,20);

ellipse (100,10,10,10);
ellipse (100,200,20,20);
ellipse (100,300,20,20);
ellipse (100,400,20,20);
ellipse (100,500,10,10);
ellipse (100,600,20,20);

ellipse (200,10,10,10);
ellipse (200,100,20,20);
ellipse (200,300,20,20);
ellipse (200,400,20,20);
ellipse (200,500,10,10);
ellipse (200,600,20,20);

ellipse (300,10,10,10);
ellipse (300,100,20,20);
ellipse (300,200,20,20);
ellipse (300,400,20,20);
ellipse (300,500,10,10);
ellipse (300,600,20,20);

ellipse (400,10,10,10);
ellipse (400,100,20,20);
ellipse (400,200,20,20);
ellipse (400,300,20,20);
ellipse (400,500,10,10);
ellipse (400,600,20,20);

ellipse (500,10,10,10);
ellipse (500,100,20,20);
ellipse (500,200,20,20);
ellipse (500,300,20,20);
ellipse (500,400,20,20);
ellipse (500,600,20,20);

ellipse (600,10,10,10);
ellipse (600,100,20,20);
ellipse (600,200,20,20);
ellipse (600,300,20,20);
ellipse (600,400,20,20);
ellipse (600,500,10,10);

ellipse (700,10,10,10);
ellipse (700,100,20,20);
ellipse (700,200,20,20);
ellipse (700,300,20,20);
ellipse (700,400,20,20);
ellipse (700,500,10,10);

ellipse (800,10,10,10);
ellipse (800,100,20,20);
ellipse (800,200,20,20);
ellipse (800,300,20,20);
ellipse (800,400,20,20);
ellipse (800,500,10,10);

ellipse (900,10,10,10);
ellipse (900,100,20,20);
ellipse (900,200,20,20);
ellipse (900,300,20,20);
ellipse (900,400,20,20);
ellipse (900,500,10,10);

ellipse (width/4,posY/3,10,10);
ellipse (width/5,posY/6,20,20);
ellipse (width/7,posY/1,40,40);
ellipse (width/9,posY/8,10,10);
ellipse (width/2,posY/2,20,20);
ellipse (width/6,posY/5,30,30);

posY = posY+velocidade;
velocidade = velocidade + aceleracao;

if (posY > height*1.5-10) {
  velocidade = velocidade * -1;
}
 
}