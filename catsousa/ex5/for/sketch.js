

var batatas;
var raio;

var valor;
var decisao;




function setup() {

createCanvas(950, 820);
raio = 0.00;
decisao = true;
background(200);

stroke(205, 92, 92);
strokeWeight(2);






}

function draw() {

background (200);
    
  if (decisao == false){
  
    stroke(205, 92, 92);
    fill(0);

    if (mouseX <= height/2) {
    raio = map(mouseY,10,width,0,80);}
    else {
    raio = map(mouseY,10,width,0,20);
    }}
    
  else{
  

    fill(205, 92, 92);
    if (mouseY >= height/2) {
    raio = map(mouseX,50,width,20,100);}
    else {
    raio = map(mouseX,50,width,80,20);
    }
  }


  strokeWeight(2);
  ellipse (width/2,height/2,raio,raio);
  batatas = int(raio);
  valor =  str(raio);


  
  
  for (var i = 1 ; i <= 3 ; i++) {
    for (var j = 1 ; j < 3 ; j++) {
    ellipse(i*width/3,j*height/3,raio*(j+i),raio*(j+i));
  }}
}

function keyTyped(){
  if (key == 'a'){
    decisao = !decisao;}
}