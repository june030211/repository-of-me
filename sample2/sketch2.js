let cnv2;

function setup() {
  cnv2 = createCanvas(600, 400); cnv2.parent("task2");
  createCanvas(600, 400);
  background(220);

  // 피부색 (탄 편)
  let skin = color(210, 160, 120);

  // 얼굴
  fill(skin);
  ellipse(300, 200, 180, 220); 

  // 머리 (단순화: 검은색 반원)
  fill(30);
  arc(300, 160, 200, 180, PI, TWO_PI);

  // 눈
  fill(255);
  ellipse(270, 190, 35, 20); 
  ellipse(330, 190, 35, 20); 
  fill(0);
  ellipse(270, 190, 12, 12); 
  ellipse(330, 190, 12, 12);

  // 속눈썹 (왼쪽 눈 위)
  stroke(0);
  strokeWeight(2);
  line(260, 178, 255, 170);
  line(270, 176, 270, 168);
  line(280, 178, 285, 170);

  // 속눈썹 (오른쪽 눈 위)
  line(320, 178, 315, 170);
  line(330, 176, 330, 168);
  line(340, 178, 345, 170);

  // 코
  noFill();
  stroke(100);
  strokeWeight(2);
  line(300, 195, 300, 225);

  // 입
  noStroke();
  fill(150, 0, 0);
  arc(300, 250, 60, 30, 0, PI);

  // 귀
  fill(skin);
  ellipse(220, 200, 30, 50); // 왼쪽 귀
  ellipse(380, 200, 30, 50); // 오른쪽 귀

  // 귀걸이 - 왼쪽(2개, 은색으로 바꿀 경우 stroke(200))
  noFill();
  stroke(255, 215, 0);
  strokeWeight(2);
  ellipse(215, 215, 12, 12);
  ellipse(215, 230, 12, 12);

  // 귀걸이 - 오른쪽(1개)
  ellipse(385, 215, 12, 12);
}
sketch2.js
