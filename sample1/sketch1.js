function setup() {
  let cnv1 = createCanvas(600, 400);
  cnv1.parent("task1");

  // 검정 배경
  rectMode(CORNER);
  fill(0);
  rect(0, 0, 600, 400);

  // 흰색 큰 타원
  noStroke();
  fill(255);
  ellipse(300, 200, 300, 200);

  // 4개의 색 원
  fill(255, 0, 0); 
  ellipse(280, 180, 100, 100);

  fill(0, 255, 0);
  ellipse(320, 180, 100, 100);

  fill(0, 0, 255);
  ellipse(280, 230, 100, 100);

  fill(255, 255, 0);
  ellipse(320, 230, 100, 100);
}

function draw() {
  // 과제1은 정적 그림 → draw 비움
}
