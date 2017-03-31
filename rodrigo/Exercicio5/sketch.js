var aluno;
var raio;

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






}

function draw() {

background (0);
    
  if (decisao == true){
  
    stroke(200,30,20);
    if (mouseY <= height/2) {
    raio = map(mouseX,0,width,20,80);}
    else {
    raio = map(mouseX,0,width,80,20);
    }}
    
  else{
  
    stroke(20,30,200);
    if (mouseY >= height/2) {
    raio = map(mouseX,0,width,20,80);}
    else {
    raio = map(mouseX,0,width,80,20);
    }
  }
  
  
  for (var i = 1 ; i < 7 ; i++) {
    for (var j = 1 ; j < 7 ; j++) {
    line(i*width/9,j*height/7,raio*(j+i),raio*(j+i));
  }}
}

function keyTyped(){
  if (key == 'a'){
    decisao = !decisao;}
}