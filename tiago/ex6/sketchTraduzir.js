var mensagens = ["azul", "verde", "vermelho", "amarelo", "laranja"];
var mensagemBon = " cores";
var randomizeX;
var randomizeY;
var counter = 0;
var limite = 10;


function setup(){

  createCanvas(800,600);
  frameRate(15);
  colorMode(RGB);
  background(51);
  fill(250,10,40);
  textSize(40);
  textAlign(CENTER);
}


function draw(){

  background(51);
  counter = 0;

  while(counter <= limite) {

    for (var i = 0; i< mensagens.length; i++) {
      randomizeX = random(2*width/4);
      randomizeY = random(2*height/4);
      text(mensagens[i],width/4+randomizeX,height/4+randomizeY);

    }
    counter++;
    fill(random(200),10,random(200));

  }
}