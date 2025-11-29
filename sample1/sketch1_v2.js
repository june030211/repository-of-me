new p5((p) => {
  p.setup = () => {
    let cnv = p.createCanvas(600, 400);
    cnv.parent("task1");

    p.background(220);

    // 첫 번째 검정 사각형 (CORNER)
    p.fill(0, 0, 0);
    p.rectMode(p.CORNER);
    p.rect(0, 0, 600, 400);

    // CENTER 모드 적용 (원래 코드의 특징)
    p.rectMode(p.CENTER);

    // 두 번째 사각형은 화면 밖으로 거의 벗어나므로 실제 출력과 동일하게 유지
    p.fill(255, 255, 255);
    p.rect(0, 0, 600, 400);

    // 타원들
    p.noStroke();
    p.fill(255);
    p.ellipse(300, 200, 300, 200);

    p.fill(255, 0, 0);
    p.ellipse(280, 180, 100, 100);

    p.fill(0, 255, 0);
    p.ellipse(320, 180, 100, 100);

    p.fill(0, 0, 255);
    p.ellipse(280, 230, 100, 100);

    p.fill(255, 255, 0);
    p.ellipse(320, 230, 100, 100);
  };
});
