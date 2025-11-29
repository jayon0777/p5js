function setup() {
  createCanvas(600, 400);

}

function draw() {
  let a = 70;
  let b = 40;
  background(250);
  let circleX = 0;
  let offset = 0;
  let speed = 0.02;
  let range = 80;
  let angle = frameCount * 0.05;
  let w = 200 + sin(frameCount * 0.03) * 100;

  let x = 350;
  let movingX = x + sin(frameCount * speed) * range;
  let movingX2 = x+ sin(frameCount * 0.03) * range + 20;
  let c1 = 100 + sin(frameCount * 0.05) * 100; 
  
  fill(255,255,c1, c1);
  noStroke();
  rect(movingX, 0, 600, 400);
  fill(20, 230, 30);
  circle(movingX, 80, 150, 150);
  fill(200, 150, 140);
  circle(movingX2, 200, 150, 150);
  fill(255, 55, 50, 255);
  push();
  translate(350, 180);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, w, 30);
  pop();
  noStroke();
  fill(0, 150, 220);
  circle(movingX , 320, 150, 150);
  
  stroke(20, 20, 30, 0);
  strokeWeight(100);
  line(0, 150, 600, 300);
  
  fill(255,255,255, 150);
  noStroke();
  fill(20, 230, 30, 200);
  circle(movingX2 - 100, 300, 100, 100);
  fill(200, 100, 100, 200);
  circle(movingX - 100, 200, 100, 100);
  fill(0, 150, 220, 200);
  circle(movingX2 - 100, 100, 100, 100);
  
  
  fill(255,192,203);
  stroke(100);
  strokeWeight(0.2);
  line(a, 0, a, 400);
  line(a*2, 0, a*2, 400);
  line(a*3, 0, a*3, 400);
  line(a*4, 0, a*4, 400);
  line(a*5, 0, a*5, 400);
  line(a*6, 0, a*6, 400);
  line(a*7, 0, a*7, 400);
  line(a*8, 0, a*8, 400);
  
  
  strokeWeight(3);
  point(a, a);
  point(a, a*2);
  point(a, a*3);
  point(a, a*4);
  point(a, a*5);
  point(a*2, a);
  point(a*2, a*2);
  point(a*2, a*3);
  point(a*2, a*4);
  point(a*2, a*5);
  
  strokeWeight(10);
  stroke(200);
  point(a*3, a);
  point(a*3, a*2);
  point(a*3, a*3);
  point(a*3, a*4);
  point(a*3, a*5);
  
  strokeWeight(2);
  stroke(255, 255, 255, c1);
  point(a*5, a);
  point(a*5, a*2);
  point(a*5, a*3);
  point(a*5, a*4);
  point(a*5, a*5);
  
  stroke(100);
  strokeWeight(7);
  point(a*6, a);
  point(a*6, a*2);
  point(a*6, a*3);
  point(a*6, a*4);
  point(a*6, a*5);
  
  strokeWeight(2);
  point(a*7, a);
  point(a*7, a*2);
  point(a*7, a*3);
  point(a*7, a*4);
  point(a*7, a*5);
  
  point(a*8, a);
  point(a*8, a*2);
  point(a*8, a*3);
  point(a*8, a*4);
  point(a*8, a*5);
  
  strokeWeight(70);
  stroke(204, 130, 0, 140);
  point(300, 300);
  stroke(250, 50, 150, 140);
  point(300, 200);
  stroke(250, 180, 100, 200);
  point(300, 100);
  
  
  
  noStroke();
}

function keyPressed() {
  if (key === 's') {
    saveGif('sketch', 10);
  }
}