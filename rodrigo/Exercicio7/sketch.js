var Pingpong = false;
var barraEs = {
  x: 10,
  y: 100,
  w: 15,
  h: 100,
};
var barraDir = {
  x: 770,
  y: 100,
  w: 15,
  h: 100,
};
var bola = {
  x: 50,
  y: 20,
  diam: 25,
  speedX: 5,
  speedY: 5,
};
var speedX = 5;
var speedY = 5;
var barraSpeed = 12;





function setup() {
  createCanvas(800, 600);
  

}

function draw() {

  
  Pingpong === true;
  
  
    background(51);
    noStroke();

  createbarraEs();
  createbarraDir();
  createbola();
  bolaBounceTopAndBottom();
  bolaBounceDir();
  bolaBounceEs();
  text("AZ Controla o Vermelho", 225, 230);
  text("º~ Controla o Verde", 425, 330);
  

}
  function createbola() {
    
    fill(249, 249, 251);
    ellipse(bola.x, bola.y, bola.diam, bola.diam);

    bola.x = bola.x + speedX;
    bola.y = bola.y + speedY;
  }



  function createbarraEs() {
    
    fill(255, 0, 0);
    rect(barraEs.x, barraEs.y, barraEs.w, barraEs.h);
    
    if (keyIsDown(90) === true) {
      if (barraEs.y + barraEs.h < height - 5) {
        barraEs.y = barraEs.y + barraSpeed;
      }
    }
    if (keyIsDown(65) === true) {
      if (barraEs.y > 5) {
        barraEs.y = barraEs.y - barraSpeed;
      }
    }
  }

  function createbarraDir () {
    
    fill(0, 255, 0);
    rect(barraDir.x, barraDir.y, barraDir.w, barraDir.h);
    

    if (keyIsDown(191) === true) { 
      if (barraDir.y + barraDir.h < height - 5) {
        barraDir.y = barraDir.y + barraSpeed;
      }
    }
    if (keyIsDown(222) === true) { 
      if (barraDir.y > 5) {
        barraDir.y = barraDir.y - barraSpeed;
      }
    }

  }

  function bolaBounceTopAndBottom() {

    
    if (bola.y + 12.5 > height || bola.y < 12.5 && bola.x > 0 && bola.x < width && bola.y > 0 && bola.y < height) {
      speedY = speedY * -1; 
      bola.y = bola.y + speedY; 
      

    }

  }
function bolaBounceDir() {
  
    if (bola.x + 12.5 > barraDir.x && bola.y + 12.5 > barraDir.y && bola.y + 12.5 < barraDir.y + barraDir.h && bola.x > 0 && bola.x < width && bola.y > 0 && bola.y < height) {
      speedX = speedX * -1; 
      bola.x = bola.x + speedX; 
      


    }
    
    else if (bola.y + 12.5 > barraDir.y && bola.y < barraDir.y + barraDir.y + barraDir.h && bola.x + 12.5 > barraDir.x && bola.x < barraDir.x + barraDir.x && bola.x > 0 && bola.x < width && bola.y > 0 && bola.y < height) {
      speedY = speedY * -1; 
      bola.y = bola.y + speedY; 
      
    }

  
    else if (bola.y + 12.5 < barraDir.y + barraDir.h && bola.y > barraDir.y && bola.x > barraDir.x && bola.x < barraDir.x + barraDir.h && bola.x > 0 && bola.x < width && bola.y > 0 && bola.y < height) {
      speedY = speedY * -1; 
      bola.y = bola.y + speedY; 
      
    }
  }

function bolaBounceEs() {
   
    if (bola.x - 12.5 < barraEs.x + barraEs.w && bola.y + 12.5 > barraEs.y && bola.y + 12.5 < barraEs.y + barraEs.h && bola.x > 0 && bola.x < width && bola.y > 0 && bola.y < height) {
      speedX = speedX * -1; 
      bola.x = bola.x + speedX; 
      
    }
  }