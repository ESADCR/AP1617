	//variáveis X
	var ellipse1X = 75;
		ellipse2X = 75;
		ellipse3X = 75;
		ellipse4X = 75;
		ellipse5X = 75;
		ellipse6X = 75;
		ellipse7X = 75;
		ellipse8X = 75;

	//variáveis Y
		ellipse1Y = 60;
		ellipse2Y = 80;
		ellipse3Y = 110;
		ellipse4Y = 150;
		ellipse5Y = 200;
		ellipse6Y = 280;
		ellipse7Y = 390;
		ellipse8Y = 580;

	////variável ellipse 9 - buraco negro
	//TAMANHO
		ellipse9XX = 500;
		ellipse9YY = 500;

	//variáveis stroke ellipse9 [RGB]
		ellipse9stroke_R = 255;
		ellipse9stroke_G = 255;
		ellipse9stroke_B = 255;

	//variável stroke 
		strokeW = 10;




function setup() {

  createCanvas(1280, 720);

}


function draw () {

	background(25,25,25);
	noStroke();
	//ellipse1
	fill(119, 90, 82);
	ellipse(ellipse1X,ellipse1Y,2,2);
	//ellipse2
	fill(167, 186, 117);
	ellipse(ellipse2X,ellipse2Y,5,5);
	//ellipse3
	fill(95, 109, 58);
	ellipse(ellipse3X,ellipse3Y,10,10);
	//ellipse4
	fill(211, 189, 129);
	ellipse(ellipse4X,ellipse4Y,20,20);
	//ellipse5
	fill(191, 114, 66);
	ellipse(ellipse5X,ellipse5Y,40,40);
	//ellipse6
	fill(86, 69, 46);
	ellipse(ellipse6X,ellipse6Y,70,70);
	//ellipse7
	fill(193, 155, 104);
	ellipse(ellipse7X,ellipse7Y,100,100);
	//ellipse8
	fill(132, 90, 34);
	ellipse(ellipse8X,ellipse8Y,200,200);

	//movimentos X
	//ellipse1 movimento
	ellipse1X = ellipse1X + 5;

	//ellipse2 movimento
	ellipse2X = ellipse2X + 4;

	//ellipse3 movimento
	ellipse3X = ellipse3X + 3;

	//ellipse4 movimento
	ellipse4X = ellipse4X + 2.5;

	//ellipse5 movimento
	ellipse5X = ellipse5X + 2;

	//ellipse6 movimento
	ellipse6X = ellipse6X + 1.5;

	//ellipse7 movimento 
	ellipse7X = ellipse7X + 1.10;

	//ellipse8 movimento
	ellipse8X = ellipse8X + 0.65;

	//movimentos Y
	//ellipse 1 movimento
	ellipse1Y = ellipse1Y + 0.8;

	//ellipse2 movimento
	ellipse2Y = ellipse2Y + 0.7;

	//ellipse3 movimento
	ellipse3Y = ellipse3Y + 0.6;

	//ellipse4 movimento
	ellipse4Y = ellipse4Y + 0.5;

	//ellipse5 movimento
	ellipse5Y = ellipse5Y + 0.4;

	//ellipse6 movimento
	ellipse6Y = ellipse6Y + 0.15;

	//ellipse7 movimento
	ellipse7Y = ellipse7Y - 0.1;

	//ellipse8 movimento
	ellipse8Y = ellipse8Y - 0.2;




	//ellipse9 "buraco negro"
	stroke(ellipse9stroke_R,ellipse9stroke_G,ellipse9stroke_B);
	strokeWeight(strokeW);
	fill(0);
	ellipse(1280,height/2,ellipse9XX,ellipse9YY + 300);






	//ellipse9 movimento
	ellipse9XX = ellipse9XX + 2;
	ellipse9YY = ellipse9XX ;




	//ellipse9 alterações stroke (sobre o eixo x)
	{
		if (ellipse1X >= 1280 - ellipse9XX/2 - 1/*raio do planeta*/) {
			(ellipse9stroke_R = 119);
			(ellipse9stroke_G = 90);
			(ellipse9stroke_B = 82);
			(strokeW = strokeW + 0.1);
		}
	}

	{
		if (ellipse2X >= 1280 - ellipse9XX/2 - 2.5/*raio do planeta*/) {
			(ellipse9stroke_R = 167);
			(ellipse9stroke_G = 186);
			(ellipse9stroke_B = 117);
			(strokeW = strokeW + 0.1)
		}
	}

	{
		if (ellipse3X >= 1280 - ellipse9XX/2 - 5/*raio do planeta*/) {
			(ellipse9stroke_R = 95);
			(ellipse9stroke_G = 109);
			(ellipse9stroke_B = 58);
			(strokeW = strokeW + 0.1)
		}
	}

	{
		if (ellipse4X >= 1280 - ellipse9XX/2 - 10/*raio do planeta*/) {
			(ellipse9stroke_R = 211);
			(ellipse9stroke_G = 189);
			(ellipse9stroke_B = 129);
			(strokeW = strokeW + 0.1)
		}
	}

	{
		if (ellipse5X >= 1280 - ellipse9XX/2 - 20/*raio do planeta*/) {
			(ellipse9stroke_R = 191);
			(ellipse9stroke_G = 114);
			(ellipse9stroke_B = 66);
			(strokeW = strokeW + 0.2)
		}
	}

	{
		if (ellipse6X >= 1280 - ellipse9XX/2 - 35/*raio do planeta*/) {
			(ellipse9stroke_R = 86);
			(ellipse9stroke_G = 69);
			(ellipse9stroke_B = 46);
			(strokeW = strokeW + 0.2)
		}
	}

	{
		if (ellipse7X >= 1280 - ellipse9XX/2 - 50/*raio do planeta*/) {
			(ellipse9stroke_R = 193);
			(ellipse9stroke_G = 155); 
			(ellipse9stroke_B = 104);
			(strokeW = strokeW + 0.3)
		}
	}

		{
		if (ellipse8X >= 1280 - ellipse9XX/2 - 180/*raio do planeta*/) {
			(ellipse9stroke_R = 132);
			(ellipse9stroke_G = 90);
			(ellipse9stroke_B = 34);
			(strokeW = strokeW + 0.3)

		}
	}

	{
		if (strokeW > 300) {
			(strokeW = 300);
			(ellipse9stroke_R = ellipse9stroke_R + 1);
			(ellipse9stroke_G = ellipse9stroke_G + 1);
			(ellipse9stroke_B = ellipse9stroke_B + 1);
		}
	}

}



