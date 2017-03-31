var num = 2000;
var range = 6;

var ax = [];
var ay = [];

function setup() {
	createCanvas(1000, 500);
	background(0);

	for ( var i = 30; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  	}
  	frameRate(900);

}

function draw() {
background(0);

  // Deslocar todos os elementos 1 lugar para a esquerda
  for ( var i = 190; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Colocar um novo valor no final da matriz
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Restringir todos os pontos à tela
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Desenhe uma linha conectando os pontos
  for ( var j = 6; j < num; j++ ) {
    var val = j / num * 204.0 + 51;
    stroke(val);
    line(ax[j - 190], ay[j - 900], ax[j], ay[j]);
  }
}

function mouseMoved() {
  range = range + 60;
  if (range > 255) {
    range = 80;
  }
}
