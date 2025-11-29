let cnv4;

function setup() {
  cnv4 = createCanvas(240, 160);
  cnv4.parent("task4");  // ★ 중요: 과제4 캔버스를 task4 div 안에 붙임

  rectMode(CENTER);
  colorMode(RGB);
  noStroke();

  for (let i = 0; i < 4; i++) {
    baseColors[i] = color(random(255), random(255), random(255));
    targetColors[i] = color(
      constrain(red(baseColors[i]) + random(-40, 40), 0, 255),
      constrain(green(baseColors[i]) + random(-40, 40), 0, 255),
      constrain(blue(baseColors[i]) + random(-40, 40), 0, 255)
    );
  }
}

function draw() {
  background(220);

  fill(0);
  rectMode(CORNER);
  rect(0, 0, width, height);

  fill(255);
  rectMode(CENTER);
  rect(0, 0, width, height);

  noStroke();

  let t = millis() * 0.001;

  let w = 120 + sin(t * 2) * 8;
  let h = 80 + cos(t * 2) * 8;
  fill(255);
  ellipse(width / 2, height / 2, w, h);

  let cx = width / 2;
  let cy = height / 2;
  let r = 24;
  let circleSize = 40;

  for (let i = 0; i < 4; i++) {
    let angle = t * 1.5 + i * HALF_PI;

    let x = cx + cos(angle) * r;
    let y = cy + sin(angle) * r;

    let blend = (sin(t + i) + 1) / 2;
    let col = lerpColor(baseColors[i], targetColors[i], blend);

    fill(col);
    ellipse(x, y, circleSize, circleSize);
  }

  if (frameCount % 300 === 0) {
    for (let i = 0; i < 4; i++) {
      baseColors[i] = targetColors[i];
      targetColors[i] = color(
        constrain(red(baseColors[i]) + random(-60, 60), 0, 255),
        constrain(green(baseColors[i]) + random(-60, 60), 0, 255),
        constrain(blue(baseColors[i]) + random(-60, 60), 0, 255)
      );
    }
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 10);
  }
}
