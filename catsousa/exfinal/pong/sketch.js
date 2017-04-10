var ballX = 300;
var ballY =300;
var ballSPO = 2;

function setup(){
    createCanvas(600,600);
}



function draw(){
    background(0);
    fill(200)
    rect(width/2,0,5,600)
    rect(0,200,15,150)
    rect(585,200,15,150)
    fill(255)
    ellipse(ballX, ballY, 30, 30)
    ballX+=ballSPO;
    if(ballX > 585 - 30 / 2) {
      ballSPO = -ballSPO;
      }
     if(ballX < 50 - 30 / 2) {
      ballSPO = -ballSPO;
      }
    }

