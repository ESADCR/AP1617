

function setup() {
  createCanvas(1000, 500);
  background(2, 93, 239);
}

function draw() {
  if (mouseIsPressed) {
    fill(200);
  } else {
    fill(200);
  } 
  triangle(mouseX, mouseY, 10, 10);
}


/**
function draw () {
	if (mouseIsPressed) {
		elipse(mouseX, mouseY, 500, -5000);
} 	else
		elipse(mouseX, mouseY, 500, 5000);
}

} **/