function setup() {

    createCanvas(600, 330);
}

function draw() {
    background(51);
    stroke(255);
    noFill()

    text("Passa o Mouse por cima dos Objectos...", 20, 230);
    if (mouseX > 300 && mouseX < 400){
        fill(255, 0, 200);
    }
    rect(300, 200, 100, 100);

    rect(300, 70, 100, 100);
}