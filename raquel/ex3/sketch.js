function setup() 
{
createCanvas(400, 400);
background(255);
noFill()
}

function draw() {
background(255);
/*
line(50,400,50,0);
line(100,400,100,0);
line(150,400,150,0);
line(200,400,200,0);
line(250,400,250,0);
line(300,400,300,0);
line(350,400,350,0);
line(400,400,400,0);
line(0,50,3000,50);
line(0,100,400,100);
line(0,150,400,150);
line(0,200,400,200);
line(0,250,400,250);
line(0,300,400,300);
line(0,350,400,350);
line(0,400,400,400);
*/


//cara
c = color ('PeachPuff');
fill(c);
ellipse(200,200,200,200);
c = color ('white');
fill(c);
//olho esquerdo
ellipse(160, 180, 40, 40);
c = color ('black');
fill(c);
ellipse(165, 185, 8,8);
//olho direito
c = color ('white');
fill(c);
ellipse(240, 180, 40, 40);
c = color ('black');
fill(c);
ellipse(245, 185, 8,8);
//boca
c = color ('PeachPuff');
fill(c);
arc(200, 250, 60, 15, 0, PI);

c = color ('brown');
fill(c);
quad(195,80,205,80,205,100,195,100);
quad(200,75,205,110,325,210,305,150);
quad (200,75,195,110,75,210,95,150);

c = color ('green');
fill(c);
quad(190,300,210,300,210,345,190,345);
line(210,312,225,325);
line(190,312,175,325);

c = color ('blue');
fill(c);
quad(210,345,200,345,207,390,213,390);
quad(190,345,200,345,193,390,187,390);

c = color ('purple');
fill(c);
quad(207,390,213,390,213,395,207,395);
quad(193,390,187,390,187,395,193,395);
}