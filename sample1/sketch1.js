function setup() {
  let cnv1 = createCanvas(600, 400);
  cnv1.parent("task1");
  background(220);

  // 배경 검정색
  fill(0, 0, 0);
  rectMode(CORNER);
  rect(0, 0, 600, 400);

  // 흰색 큰 타원
  noStroke();
  fill(255);
  ellipse(300, 200, 300, 200);

  // 4개의 색 원
  fill(255, 0, 0); // red
  ellipse(280, 180, 100, 100);

  fill(0, 255, 0); // green
  ellipse(320, 180, 100, 100);

  fill(0, 0, 255); // blue
  ellipse(280, 230, 100, 100);

  fill(255, 255, 0); // yellow
  ellipse(320, 230, 100, 100);
}
