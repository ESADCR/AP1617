
var posicaoX = 0;

function setup() {
	createCanvas (800, 600);
	background (255);
	fill(0);

}

function draw() {
	background (255);
	ellipse (posicaoX,height/2,20,20);
	posicaoX = posicaoX+1;
}

// se a posiçaoem x for maior ou igual ao width entao o passo volta//

if(posicaoX > = width-raio){
	posicaoX=0;
}