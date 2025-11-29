function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  fill(60, 30, 0);
  noStroke(60, 30, 0);
  quad(350, 150, 370, 300, 230, 300, 250, 150);
  fill(230, 200, 150);
  ellipse(300, 200, 110, 130);
  quad(290, 200, 290, 330, 310, 330, 310, 200);
  fill(240, 240, 240);
  ellipse(275, 193, 23, 17);
  ellipse(325, 193, 23, 17);
  fill(0);
  ellipse(272, 194, 15, 15);
  ellipse(322, 194, 15, 15);
  stroke(200, 150, 150);
  strokeWeight(3);
  noFill();
  arc(274, 197, 24, 25, PI, 2*PI);
  arc(324, 197, 24, 25, PI, 2*PI);
  fill(200, 150, 150)
  triangle(300, 200, 305, 220, 295, 220);
  stroke(220, 150, 150);
  fill(150, 10, 10);
  arc(300, 230, 24, 25, PI*1/4, PI*3/4);
  fill(60, 30, 0);
  noStroke();
  arc(300, 175, 115, 110, PI, 2*PI);
  triangle(243, 165, 255, 160, 247, 250);
  triangle(357, 165, 343, 160, 350, 250);
  fill(210, 50, 50);
  rect(225, 280, 150, 150, 30);
  fill(230, 200, 150);
  
}