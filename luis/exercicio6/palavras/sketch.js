

var mensagens = ["batatas", "feijao", "maca", "acelga", "rucola"];

var mensagemBon = "comida";

var randomizeX;
var randomizeY;

var counter  = 10;
var limite  = 1;


function setup(){

  createCanvas(800,600);
  frameRate(15);
  colorMode(RGB);
  background(0);
  fill(250,10,40);
  textSize(40);
  textAlign(CENTER);


}


function draw(){

  background(0);
  counter = 0;


  while(counter <= limite) {

    for (var i = 0; i< mensagens.length; i++) {
      randomizeX = random(2*width/4);
      randomizeY = random(2*height/4);
      text(mensagens,width/4+randomizeX,height/4+randomizeY);
    }
    counter++;
    fill(random(200),10,random(200));
  }
}
