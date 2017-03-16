var exerc;

function setup(){
  createCanvas(710, 400);
  exerc = createGraphics(400, 250);
}

function draw(){
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  exerc.noFill();
  exerc.stroke(255);
  exerc.ellipse(mouseX-150, mouseY-75, 60, 60);

}