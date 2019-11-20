function setup() {
  // put setup code here
  createCanvas(500, 700);
}

function draw() {
  // put drawing code here
  background(51);

  noStroke();
  fill('#FEEBC1');
  ellipse(50, 110, 50, 50);
  fill('#E8CCA5');
  ellipse(50, 110, 20, 20)
  //venus
  fill('#FFBE00');
  ellipse(140, 150, 100, 100);
  fill('#E89B0C');
  ellipse(140, 150, 70, 60);
  //earth
  fill('#1CC5E8');
  ellipse(250, 220, 150, 150);
  fill('#1F9EFF');
  ellipse(250, 220, 100, 100);
  fill('#1CE89A');
  quad(190, 180, 200, 250, 260, 235, 250, 180);
  triangle(200, 250, 250, 250, 300, 300);
  //mars
  fill('#FF8A27');
  ellipse(380, 325, 225, 225);
  fill('#FF4219');
  ellipse(380, 325, 170, 180);
  fill('#E85A17');
  ellipse(380, 325, 120, 100);
  //jupiter
  fill('#FFE2BA');
  arc(450, 500, 450, 450, PI, 0);
  fill('#E8D19E');
  ellipse(450, 500, 350, 350);
  fill('#E8BE9E');
  ellipse(450, 500, 250, 200);
  //staurn
  fill('#FFA86D');
  arc(350, 700, 550, 550, PI, 0);
  fill('#FF7261');
  ellipse(350, 700, 450, 400);
  fill('#E87D58');
  ellipse(350, 700, 350, 200);
  //saturn ring
  fill('#FFE3CE');
  quad(350, 700, 550, 550, 450, 700, 700, 700);
  //stars
  fill('#F4F6FF');
  colorMode(HSB, 200);
  ellipse(150, 400, 25, 25);
  ellipse(100, 370, 15, 15);
  ellipse(50, 50, 10, 10);
  ellipse(400, 100, 25, 25);
  ellipse(250, 80, 25, 25);
  ellipse(80, 10, 25, 25);
  ellipse(100, 500, 25, 25);
  ellipse(20, 300, 25, 25);
 }