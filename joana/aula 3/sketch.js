

/*cores:0(preto) a 255(branco)
ver o outro doc*/
                                        
var x;
var y;
function setup() {
	createCanvas(1263, 298);
	background(204)
	
}

function draw() {
	fill('black')
	ellipse(650, 120, 90, 70);
	ellipse(650, 195, 140, 140);


	fill('red')
	arc(600, 160, 90, 100, 40, 50, CHORD);
	arc(690, 190, 120, 130, -40, -50, CHORD);


 	fill('black')
 	ellipse(600, 120, 10, 10);
 	ellipse(580, 130, 15, 15);
 	ellipse(563, 155, 10, 10);
 	ellipse(570, 173, 10, 10);
 	ellipse(590, 168, 15, 15);
 	ellipse(605, 150, 15, 15);
 	ellipse(620, 140, 10, 10);

 	ellipse(670, 140, 10, 10);
 	ellipse(690, 150, 15, 15);
 	ellipse(699, 165, 10, 10);
 	ellipse(720, 168, 10, 10);
 	ellipse(733, 179, 15, 15);
 	ellipse(719, 148, 15, 15);


 	fill('white')
 	ellipse(630, 110, 8, 8);
 	ellipse(660, 110, 8, 8);
}                                      

/*function mouseClicked(){
	background(255);	
}*/


