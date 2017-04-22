var batatas;
var raio;
var valor;
var decisao;

function setup() {

  createCanvas(950, 700);
    raio = 0.00;
    decisao = true;
      background('PowderBlue');
      //stroke(30, 72, 72);
      //strokeWeight(2);


}

function draw() {

  background ('PowderBlue');   

    if (decisao == false){  
      stroke('MediumOrchid');
      fill(0);
    if (mouseX <= height/2) {
      raio = map(mouseY,10,width,0,70);}
    else {
      raio = map(mouseY,10,width,0,10);
    }}

  else{

    stroke(0);
    fill('MediumOrchid');
      if (mouseY >= height/2) {
        raio = map(mouseX,50,width,20,100);}

    else {
    raio = map(mouseX,50,width,100,20);
    }
  }

  strokeWeight(2);
  ellipse (width/2,height/2,raio,raio);
    //batatas = int(raio);
    valor =  str(raio);
      for (var i = 1 ; i <= 4 ; i++) {
      for (var j = 1 ; j <= 4 ; j++) {
  ellipse(i*width/5,j*height/5,raio*(j+i),raio*(j+i));

  }}
}

function keyTyped(){
  if (key == 'r'){
    decisao = !decisao;}
}