var posY = 0;
var r = 20;
var vel = 0;
var dir = 1;



function setup() {

createCanvas(800, 800);
background(255);

}

function draw() {
background(0)

vel = map(mouseY,height,0,10,0);

ellipseMode(CENTER);

if(mouseIsPressed)
{
	ellipse(width/5,posY, 100, 100);  
	c = color('blue');  
	fill(c);
}  
else
{
	ellipse(posY,height/5, 100, 100);  
	c = color('orange');  
	fill(c);
}



posY = posY+vel*dir;

r = map(posY,0,height,100,80);



if(posY >= height-r && dir > 0){

	dir = -8;

	}

if(posY <= 0+r && dir < 0){
    
    posY = 1+r;
	dir = 1;

	}	
 
}