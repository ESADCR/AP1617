var movimentox = 50;
var movimentoy = 50;
var pi = 3.14;


function setup() {
  createCanvas(600,400);
  background(0,0,0);
}

function draw() {
  background(51);
  fill(20,26,200);
  arc(movimentox, movimentoy, 80, 80, 0, pi+QUARTER_PI, PIE);



  movimentox = movimentox + 1;
  pi = pi + 0.1;

  {
    if (movimentox >= 200){
    (movimentoy = movimentoy + 0.5)
    }
  }

  {
    if (movimentoy >= 200){
      (movimentox = 550)
    }
  }
}

