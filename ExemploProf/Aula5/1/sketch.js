
var batatas;
var raio;
var frase;
var valor;
var decisao;



function setup() {

createCanvas(800,600);
raio = 0.00;
decisao = false;
colorMode(RGB);
background (0);
noFill();
stroke(200,30,20);
strokeWeight(2);




ellipse (width/2,height/2,40,40);

textSize(20);




}

function draw() {

background (0);
    
  if (decisao == true){
    frase = "Raio: ";
    stroke(200,30,20);
    if (mouseY <= height/2) {
    raio = map(mouseX,0,width,20,80);}
    else {
    raio = map(mouseX,0,width,80,20);
    }}
    
  else{
    frase = "Raio a decrescer: ";
    stroke(20,30,200);
    if (mouseY >= height/2) {
    raio = map(mouseX,0,width,20,80);}
    else {
    raio = map(mouseX,0,width,80,20);
    }
  }
  
 
  strokeWeight(2);
  noFill();
  ellipse (width/2,height/2,raio,raio);
  batatas = int(raio);
  valor =  str(raio);

  noStroke();
  fill(255);
  strokeWeight(1);
  text (frase + valor + " | valor inteiro: " + str(batatas), 50, 50);

 
 
}

function keyTyped(){
  if (key == 'a'){
    decisao = !decisao;}
}