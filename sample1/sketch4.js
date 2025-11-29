new p5((p) => {
  let baseColors = [];
  let targetColors = [];

  p.setup = () => {
    let cnv = p.createCanvas(240, 160);
    cnv.parent("task4");

    p.rectMode(p.CENTER);
    p.colorMode(p.RGB);
    p.noStroke();

    for (let i = 0; i < 4; i++) {
      baseColors[i] = p.color(p.random(255), p.random(255), p.random(255));
      targetColors[i] = p.color(
        p.constrain(p.red(baseColors[i]) + p.random(-40, 40), 0, 255),
        p.constrain(p.green(baseColors[i]) + p.random(-40, 40), 0, 255),
        p.constrain(p.blue(baseColors[i]) + p.random(-40, 40), 0, 255)
      );
    }
  };

  p.draw = () => {
    p.background(220);

    // 검정 사각형 (CORNER)
    p.fill(0);
    p.rectMode(p.CORNER);
    p.rect(0, 0, p.width, p.height);

    // 흰 사각형 (CENTER)
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(0, 0, p.width, p.height);

    // 메인 타원
    let t = p.millis() * 0.001;
    let w = 120 + p.sin(t * 2) * 8;
    let h = 80 + p.cos(t * 2) * 8;

    p.fill(255);
    p.ellipse(p.width / 2, p.height / 2, w, h);

    // 4개 작은 원
    let cx = p.width / 2;
    let cy = p.height / 2;
    let r = 24;
    let circleSize = 40;

    for (let i = 0; i < 4; i++) {
      let angle = t * 1.5 + i * p.HALF_PI;
      let x = cx + p.cos(angle) * r;
      let y = cy + p.sin(angle) * r;

      let blend = (p.sin(t + i) + 1) / 2;

      let col = p.lerpColor(baseColors[i], targetColors[i], blend);
      p.fill(col);

      p.ellipse(x, y, circleSize, circleSize);
    }

    if (p.frameCount % 300 === 0) {
      for (let i = 0; i < 4; i++) {
        baseColors[i] = targetColors[i];
        targetColors[i] = p.color(
          p.constrain(p.red(baseColors[i]) + p.random(-60, 60), 0, 255),
          p.constrain(p.green(baseColors[i]) + p.random(-60, 60), 0, 255),
          p.constrain(p.blue(baseColors[i]) + p.random(-60, 60), 0, 255)
        );
      }
    }
  };

  p.keyPressed = () => {
    if (p.key === "s" || p.key === "S") {
      p.saveGif("mySketch", 10);
    }
  };
});
