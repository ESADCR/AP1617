function setup() {
  createCanvas(1280, 800);
}

function draw() {
  if (mouseIsPressed) {
    var c = color('green');
    fill(c);
  } else {
    var c = color('magenta');
    fill(c);
  }
  ellipse(mouseX, mouseY, 40, 40);
}
