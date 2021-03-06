function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {

/*Cabelo*/

fill(36, 32, 30);
beginShape();
vertex(181, 45);
bezierVertex(111, -7, 2, 87, 90, 286);
vertex(66, 390);
vertex(349, 394);
vertex(352, 394);
vertex(321, 303);
bezierVertex(337, 70, 222, 9, 180, 45);
endShape();

/*Pescoço*/

fill(199, 149, 122);
beginShape();
vertex(232, 297);
bezierVertex(218, 290, 230, 319, 279, 400);
vertex(117, 400);
bezierVertex(174, 317, 165, 302, 161, 293);
endShape();

/*Face*/

fill(245, 188, 157);
beginShape();
vertex(113, 121);
vertex(183, 67);
bezierVertex(211, 51, 258, 104, 264, 121);
vertex(266, 247);
bezierVertex(193, 368, 150, 276, 116, 250);
vertex(116, 250);
vertex(113, 120);
endShape();

/*Risco do Olho*/

fill(245, 188, 157);
beginShape();
arc(230, 168, 50, 25, 245, 339);
endShape();

fill(245, 188, 157);
beginShape();
arc(149, 168, 50, 25, 204, 308);
endShape();

/*Sobrancelhas*/

fill(245, 188, 157);
beginShape();
arc(231, 148, 53, 20, 223.3, 320.5);
endShape();

fill(245, 188, 157);
beginShape();
arc(147, 148, 53, 20, 198, 320.2);
endShape();

/*Olhos*/

fill(240, 250, 240);
beginShape();
arc(231, 174, 45, 23, 19, 100.65);
arc(151, 174, 45, 23, 19, 100.65);
endShape();

fill(29, 31, 29);
beginShape();
arc(231, 174, 20, 20, 19, 100.65);
arc(151, 174, 20, 20, 19, 100.65);
endShape();

fill(245, 250, 245);
beginShape();
arc(233, 171, 11, 11, 19, 100.65);
arc(153, 171, 11, 11, 19, 100.65);
endShape();

/*Nariz*/

fill(245, 188, 157);
beginShape();
vertex(204, 206);
bezierVertex(235, 231, 149, 230, 180, 207);
endShape();


/*Piercing do Nariz*/

noFill();
beginShape();
curveVertex(160,  192);
curveVertex(199,  225);
curveVertex(210,  222);
curveVertex(201, 216);
curveVertex(165, 248);
endShape();

/*Boca*/

fill(240, 120, 126);
beginShape();
arc(191, 239, 71, 59, 0, 160.2);
endShape();

fill(250, 240, 241);
beginShape();
arc(191, 244, 52, 37, 0, 160.2);
endShape();

/*Dentes*/

beginShape();
line (214, 253, 168, 253);
line (200, 259, 200, 244);
line (184, 260, 184, 244);
line (192, 262, 192, 244);
line (208, 258, 208, 244);
line (177, 258, 177, 244);
line (169, 253, 169, 244);
endShape();

/*Camisola*/

fill(48, 169, 173);
beginShape();
vertex(41,400);
bezierVertex (123, 338, 163, 276, 200, 400);
bezierVertex (220, 287, 234, 308, 364, 400);
endShape();

}
