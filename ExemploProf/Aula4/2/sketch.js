


function setup() {

createCanvas(800, 600);
background(255);

noFill()





}

function draw() {
background(255);
strokeWeight(5);
line(mouseX,mouseY,width,height/2);
strokeWeight(3);
line(mouseX,mouseY,width,height);
strokeWeight(1);
ellipse(mouseX,mouseY,100,100)
 
}