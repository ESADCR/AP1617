
String[] mensagens = {"batatas", "feijao", "maca", "acelga", "rucola"};

String mensagemBon = " comida";

float randomizeX;
float randomizeY;

int counter = 0;
int limite = 10;


void setup(){

  size(800,600);
  frameRate(12);
  colorMode(RGB);
  background(0);
  fill(250,10,40);
  textSize(40);
  textAlign(CENTER);
  //text(mensagemBon,width/2,height/2);

}


void draw(){

  background(0);
  counter = 0;
  
  while(counter <= limite) {
    
    for (int i = 0; i< mensagens.length; i++) {
      randomizeX = random(2*width/4);
      randomizeY = random(2*height/4);
      text(mensagens[i],width/4+randomizeX,height/4+randomizeY);
    }
    counter++;
    fill(random(200),10,random(200));
  }
}