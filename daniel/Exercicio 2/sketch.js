ArrayList balls = new ArrayList();

void setup()
{
    size(500, 500);
    background(100);  
}

void draw()
{ 
  background(100);
  if (balls.size() > 0) {
  	for (int i = 0; i < balls.size(); i++) {
  		balls.get(i).update();
  		balls.get(i).draw();
  	}
  }
}

void mouseClicked() {
	Ball b = new Ball(mouseX, mouseY);
	balls.add(b);
}

class Ball {
	int x, y;
	int yV;
	int gravity;

	Ball(int initX, int initY) {
		x = initX;
		y = initY;
		yV = 1;
		gravity = 1;
	}

	void update() {
		yV += gravity;
		y += yV;
		if (y > 480) {
			yV = -20;
		}
	}

	void draw() {
		ellipse(x, y, 20, 20);
	}
}