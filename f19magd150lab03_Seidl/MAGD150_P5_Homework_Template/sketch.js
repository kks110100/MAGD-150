function setup() {
  // put setup code here
  createCanvas(600, 400);
  frameRate(15);
}

function draw() {
  // put drawing code here
  //used a lot of the references listed on the Lab 3 page because I got stuck in a lot of portions of code
  background(100);
  //stationary baby bubbles
  let a = 120;
  let b = 150;
  let c = lerp(a,b, 0.5);
  let d = lerp(a, b, 1.5);
  let e = lerp(a, b, 2);
  let y = 300
  strokeWeight(5);
  stroke('#C8DDFD');
  point(a, y);
  point(b, y);
  strokeWeight(10);
  point(c, y);
  point(d, y);
  point(e, y);

  //different colored bubbles that move
  noStroke();
  let leftWall = 100;
  let rightWall = 400;
  let xm = mouseX;
  let xc = constrain(mouseX, leftWall, rightWall);
  fill('#E7FDFE');
  ellipse(pmouseX/0.5, pmouseY/0.5, 100, 100)
  fill('#C1DAE6');
  ellipse(pmouseX*0.5, pmouseY*0.5, 100, 100);
  fill('#D6F2FF');
  ellipse(pmouseX+100, pmouseY+32, 100, 100);
  fill('#B3E2E6');
  ellipse(xm-200, mouseY+200, 100, 100);
  fill('#DCE6E6');
  ellipse(xc, mouseY, 100, 100);
  fill('#DDF5FD');
  let x1 = map(xm, 0, width, 130, 190);
  ellipse(x1, 130, 130, 130);
  let x2 = map(xm, 0, width, 10, 100);
  ellipse(x2, 190, 130, 130);
 }