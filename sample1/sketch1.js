function setup() {
  createCanvas(600, 400);
  background(220);
  
    fill(0, 0, 0);
	rect(0, 0, 600, 400); // 사각형의 왼쪽 상당 좌표(0, 0), 크기 200x200
	
	fill(255, 255, 255);
	rectMode(CENTER);
	rect(0, 0, 600, 400); // 사각형의 중심 좌표(0, 0), 크기 200x200
  
  noStroke()
  fill(255); // white
  ellipse(300, 200, 300, 200);
  
  fill(255, 0, 0); // red
  ellipse(280, 180, 100, 100);

  fill(0, 255, 0); // green
  ellipse(320, 180, 100, 100);
  
  fill(0, 0, 255); // blue
  ellipse(280, 230, 100, 100);
  
  fill(255, 255, 0); // yellow
  ellipse(320, 230, 100, 100);
