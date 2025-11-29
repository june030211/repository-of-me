let bgcolor = 220
function setup() {
  createCanvas(600, 400);
  bgcolor = color(210, 160, 120)
}
function draw() {
  background(255, 255, 255);
  let cx = 300, cy = 200;
  
  let skin = bgcolor;

  fill(skin);
  ellipse(300, 200, 180, 220); 

  fill(30);
  arc(300, 160, 200, 180, PI, TWO_PI);

  stroke(0);
  strokeWeight(2);

  if (mouseIsPressed) {
    noFill();
    arc(cx - 30, cy - 10, 35, 20, 0, PI);
    arc(cx + 30, cy - 10, 35, 20, 0, PI);
    
    strokeWeight(2);
    line(262, 200, 257, 205);
    line(270, 200, 270, 205);
    line(278, 200, 283, 205);

    line(322, 200, 317, 205);
    line(330, 200, 330, 205);
    line(338, 200, 343, 205);} 
    
    else {
    noStroke();
    fill(255);
    ellipse(cx - 30, cy - 10, 35, 20);
    ellipse(cx + 30, cy - 10, 35, 20);
    
    stroke(0);
    strokeWeight(2);
    line(260, 178, 255, 170);
    line(270, 176, 270, 168);
    line(280, 178, 285, 170);

    line(320, 178, 315, 170);
    line(330, 176, 330, 168);
    line(340, 178, 345, 170);
  
    fill(0);
    ellipse(cx - 30, cy - 10, 10, 10);
    ellipse(cx + 30, cy - 10, 10, 10);
    }
  
  noFill();
  stroke(100);
  strokeWeight(2);
  line(300, 195, 300, 225);

  noStroke();
  fill(150, 0, 0);
  arc(300, 250, 60, 30, 0, PI);

  fill(skin);
  ellipse(220, 200, 30, 50); // 왼쪽 귀
  ellipse(380, 200, 30, 50); // 오른쪽 귀

  noFill();
  stroke(255, 215, 0);
  strokeWeight(2);
  ellipse(215, 215, 12, 12);
  ellipse(210, 215, 12, 12);

  ellipse(390, 215, 12, 12);
}

function keyPressed() {
    if (key === '1') {
    bgcolor = color(0, 0, 0); 
  } else if (key === '2') {
    bgcolor = color(200, 200, 200); 
  } else if (key === '3') {
    bgcolor = color(210, 160, 120); 
  } else if (key === 's') {
    saveGif('mySketch', 10);
  }}
