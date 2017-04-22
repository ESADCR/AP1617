var ballX = 200;
var ballY =200;
var ballSPO = 4;

function setup(){
    createCanvas(700,600);
}



function draw(){

    background(0);
    fill(255)
    rect(5,150,15,150)
    rect(685,150,15,150)
    
    ellipse(ballX, ballY, 40, 40)
    ballX+=ballSPO;
    if(ballX > 685 - 30 / 2) {
      ballSPO = -ballSPO;
      }
     if(ballX < 50 - 30 / 2) {
      ballSPO = -ballSPO;
      }
    }