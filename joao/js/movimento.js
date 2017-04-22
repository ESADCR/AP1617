var x, y, z;

function setup() {
  createCanvas(1080, 640);


  x = width;
  z = width;
}

function draw() {
  background('#fae');
  
  text (z, 10, 10)
  text(x, 10, 250)

  stroke('rgb(100%,0%,10%)');
  fill(51);
  rect(x, 20, 60, 60);

  stroke(4);
  fill(255, 204, 0);
  ellipse(z, 200, 50, 50);
  
  x = x - 10;
  z = z - 3;
  

  if (x < 5) {
    x = width;
  }
  if (z < 5) {
    z = width;
  }

}