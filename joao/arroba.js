function setup() {
  

  createCanvas(1080, 640);
}

function draw() { 
    if (mouseIsPressed) {
      fill(20);
    }
    else {
      fill(400);
    }
    ellipse(mouseX, mouseY, 80, 80);
}