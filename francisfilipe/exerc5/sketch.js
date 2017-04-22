var raio;
var valor;
var condicao;



function setup() {

createCanvas(700, 600);
raio = 1.00;
condicao = true;
background(200);

stroke(92, 205, 122);
strokeWeight(5);
}



function draw() {

background (200);
    
  if (condicao == false){
  
    stroke(205);
    fill(0);

    if (mouseX <= height/4) {
    raio = map(mouseY,1,width,100);}
    }

  else{
    fill(205);
    if (mouseY >= height/4) {
    raio = map(mouseX,20,width,20,100);}
  }

  
  for (var i = 1 ; i <= 2 ; i++) {
  for (var j = 1 ; j < 2 ; j++) {
      ellipse(i*width/2,j*height/2,raio*(j+i),raio*(j+i));
      
  }}

}