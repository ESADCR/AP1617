function setup() {
	createCanvas(1350, 650, WEBGL);
	noStroke();
}

function draw() {
	background(200);

	// Orange point light on the right
	pointLight(150, 100, 2, 500, 2, 200);

	// Blue directional light from the left
	directionalLight(2, 102, 255, -4, 2, 2);

	// Yellow spotlight from the front
	pointLight(255, 255, 109, 2, 2, 200);

	rotateY(map(mouseX, -2, width, -2, PI));
	rotateX(map(mouseY, -2, height, -2, PI));
	box(200);
}