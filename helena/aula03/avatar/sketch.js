


function setup() {

createCanvas(800, 600);
background(255);

noFill()





}

function draw() {
background(255);
//cara
ellipse(200,200,200,200);
c = color (207,240,158);
fill(c);
//olho esquerdo
ellipse(160, 180, 40, 40);
c = color (207,240,158);
fill(c);
//olho direito
ellipse(240, 180, 40, 40);
c = color (168,219,168);
fill(c);
//boca
arc(200, 250, 60, 15, HALF_PI, PI);
}