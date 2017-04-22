var x=1,y=1,sw=0;

function setup() {
  createCanvas(1500, 1100);
}

function draw() {

  if (sw==0)
  {
    if (mouseIsPressed) {
    var c = color('red');
    fill(c);
    x-=1;
    y-=1;
    }
    else {
    var c = color('blue');
    fill(c);
    x+=1;
    y+=1;
    }
  }
  else {
    if (mouseIsPressed) {
    var c = color('green');
    fill(c);
    x+=1;
    y+=1;
    }
    else {
    var c = color('orange');
    fill(c);
    x-=1;
    y-=1;
    }

  }

  if (x>=250 || y>=250){
    if(sw==0)
      sw=1;
    else
      sw=0;
  }
  else if (x<=(0) || y<=(0)){
    if(sw==1)
      sw=0;
    else
      sw=1;
  }


  ellipse(mouseX, mouseY, x, y);
}