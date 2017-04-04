
var batatas;
var raio;
var valor;
var decisao;

function setup() {

createCanvas(600, 400);
raio = 0.00;
decisao = true;
background(50);

stroke(205, 92, 92);
strokeWeight(2);

}

function draw() {
background (50);    
  if (decisao == false){  
    stroke(80, 72, 125);
    fill(0);
    if (mouseX <= height/2) {
    raio = map(mouseY,5,width,0,50);}
    else {
    raio = map(mouseY,5,width,0,15);
    }}    
  else{
    fill(0);
    if (mouseY >= height/2) {
    raio = map(mouseX,50,width,20,100);}
    else {
    raio = map(mouseX,50,width,80,20);
    }
  }
  strokeWeight(0);
  ellipse (width/4,height/4,raio,raio);
  batatas = int(raio);
  valor =  str(raio);
    for (var i = 1 ; i <= 1 ; i++) {
    for (var j = 1 ; j < 4 ; j++) {
    ellipse(i*width/4,j*height/4,raio*(j+i),raio*(j+i));
  }}
}

function keyTyped(){
  if (key == 'a'){
    decisao = !decisao;}
}