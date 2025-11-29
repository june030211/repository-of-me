new p5((p) => { p.setup = () => { 
  let cnv = p.createCanvas(600, 400); cnv.parent("task1"); 
  p.background(220);
  p.fill(0, 0, 0); 
  p.rect(0, 0, 600, 400);
  p.fill(0, 0, 0)
  p.rectMode(p.CORNER); 
  p.rect(0, 0, 600, 400)
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
  p.ellipse(320, 230, 100, 100); }; });
