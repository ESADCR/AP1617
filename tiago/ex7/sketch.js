var gameStart = false;
var paddleL = {
  x: 10,
  y: 100,
  w: 15,
  h: 100,
};
var paddleR = {
  x: 770,
  y: 100,
  w: 15,
  h: 100,
};
var ball = {
  x: 50,
  y: 20,
  diam: 25,
  speedX: 8,
  speedY: 8,
};
var speedX = 5;
var speedY = 5;
var paddleSpeed = 12;
var s = "Welcome to Infinte Pong! Player one controlls their paddle with the a and z keys. Player two controls their paddle with the /? key and the '\" key. Press the space bar to begin";



function setup() {
  createCanvas(800, 600);
  smooth();


}

function draw() {


  gameStart === true;

  
    background(51);
    noStroke();

  createLeftPaddle();
  createRightPaddle();
  createBall();
  ballBounceTopAndBottom();
  ballBounceRight();
  ballBounceLeft();
  
  

}
  function createBall() {

    fill(250);
    ellipse(ball.x, ball.y, ball.diam, ball.diam);

    ball.x = ball.x + speedX;
    ball.y = ball.y + speedY;
  }



  function createLeftPaddle() {
    
    fill(250);
    rect(paddleL.x, paddleL.y, paddleL.w, paddleL.h);
 
    if (keyIsDown(90) === true) {
      if (paddleL.y + paddleL.h < height - 5) {
        paddleL.y = paddleL.y + paddleSpeed;
      }
    }
    if (keyIsDown(65) === true) {
      if (paddleL.y > 5) {
        paddleL.y = paddleL.y - paddleSpeed;
      }
    }
  }

  function createRightPaddle() {
  
    fill(250);
    rect(paddleR.x, paddleR.y, paddleR.w, paddleR.h);
  

    if (keyIsDown(191) === true) { 
      if (paddleR.y + paddleR.h < height - 5) {
        paddleR.y = paddleR.y + paddleSpeed;
      }
    }
    if (keyIsDown(222) === true) { 
      if (paddleR.y > 5) {
        paddleR.y = paddleR.y - paddleSpeed;
      }
    }

  }

  function ballBounceTopAndBottom() {

   
    if (ball.y + 12.5 > height || ball.y < 12.5 && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1; 
      ball.y = ball.y + speedY; 
        print("wham");

    }

  }
function ballBounceRight() {
    
    if (ball.x + 12.5 > paddleR.x && ball.y + 12.5 > paddleR.y && ball.y + 12.5 < paddleR.y + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedX = speedX * -1;
      ball.x = ball.x + speedX; 
      print("bam");


    }
  
    else if (ball.y + 12.5 > paddleR.y && ball.y < paddleR.y + paddleR.y + paddleR.h && ball.x + 12.5 > paddleR.x && ball.x < paddleR.x + paddleR.x && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1; n
      ball.y = ball.y + speedY; 
      print("bam top");
    }

    else if (ball.y + 12.5 < paddleR.y + paddleR.h && ball.y > paddleR.y && ball.x > paddleR.x && ball.x < paddleR.x + paddleR.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY * -1;
      ball.y = ball.y + speedY; 
      print("bam bottom");
    }
  }

function ballBounceLeft() {
    if (ball.x - 12.5 < paddleL.x + paddleL.w && ball.y + 12.5 > paddleL.y && ball.y + 12.5 < paddleL.y + paddleL.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedX = speedX * -1;
      ball.x = ball.x + speedX;
      print("pow");
    }
  }
